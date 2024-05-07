import { Box } from "@mui/material";
import { RootState } from "@store/index";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { JobCardList } from "../components/jobCardList";
import { JobPageTitle } from "../components/title";
import { useJobs } from "../hooks";

export function Home() {
  const state = useSelector((state: RootState) => state.jobs);
  const [openShowMoreModal, setShowMoreModalOpen] = useState(false);
  const [apiData, setApiData] = useState({
    limit: 10,
    offset: 0,
  });
  const { isLoading, error, getJobsList } = useJobs();
  const jobs = state?.jobs?.jdList;
  const totalJobCount = state?.jobs?.totalCount;
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setApiData((prev) => ({
            ...prev,
            offset: prev.offset + apiData.limit,
          }));
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  useEffect(() => {
    getJobsList(apiData);
  }, [apiData]);

  console.log("Jobs", state.jobs, typeof jobs);
  return (
    <Box textAlign="center" minHeight={"90vh"} height="auto" py={4} px={16}>
      <JobPageTitle />
      <JobCardList
        isLoading={isLoading}
        error={error}
        jobs={jobs}
        setShowMoreModalOpen={setShowMoreModalOpen}
        ref={observerTarget}
      />
    </Box>
  );
}
