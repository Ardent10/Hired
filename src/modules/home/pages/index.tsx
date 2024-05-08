import Navbar from "@modules/common/navbar";
import { Box } from "@mui/material";
import { RootState } from "@store/index";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Filter } from "../components/filter";
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
  const { control, watch } = useForm();

  useEffect(() => {
    getJobsList(apiData);
  }, [apiData]);

  const jobs = state?.jobs?.jdList;

  return (
    <Box>
      <Navbar />

      <Box
        textAlign="center"
        minHeight={"90vh"}
        height="auto"
        py={4}
        px={{ xs: 4, md: 8, lg: 16 }}
      >
        <JobPageTitle />
        <Filter control={control} watch={watch} />
        <JobCardList
          isLoading={isLoading}
          error={error}
          jobs={jobs}
          setShowMoreModalOpen={setShowMoreModalOpen}
          setApiData={setApiData}
          apiData={apiData}
          state={state}
        />
      </Box>
    </Box>
  );
}
