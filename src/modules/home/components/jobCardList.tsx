import { BasicCard } from "@components/card";
import { Loader } from "@modules/common/loader";
import { Box, Grid } from "@mui/material";
import { InitialStateType, Job } from "@store/jobs/slice";
import { Dispatch, useEffect, useRef } from "react";
import { Error } from "../components/error";
import { NoDataFound } from "../components/noDataFound";

interface JobCardListProps {
  isLoading: boolean;
  error: string | null;
  jobs: Job[];
  state: InitialStateType;
  setShowMoreModalOpen: (value: boolean) => void;
  setApiData: Dispatch<
    React.SetStateAction<{
      limit: number;
      offset: number;
    }>
  >;
  apiData: {
    limit: number;
    offset: number;
  };
}

export function JobCardList({
  isLoading,
  error,
  jobs,
  setShowMoreModalOpen,
  setApiData,
  apiData,
  state,
}: JobCardListProps) {
  const totalJobCount = state.jobs.totalCount || 947;
  const observerTarget = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const nextOffset = apiData.offset + apiData.limit;
          if (nextOffset <= totalJobCount) {
            setApiData((prev: { limit: number; offset: number }) => ({
              ...prev,
              offset: prev.offset + apiData.limit,
            }));
          }
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

  return (
    <Grid container spacing={{ xs: 4, lg: 8 }}>
      {jobs.length
        ? jobs?.map((job: any, index: number) => (
            <Grid item key={job.jdUid} xs={12} sm={6} md={4}>
              <BasicCard
                key={job.jdUid}
                companyName={job.companyName}
                jdLink={job.jdLink}
                jobDetailsFromCompany={job.jobDetailsFromCompany}
                jobRole={job.jobRole}
                location={job.location}
                logoUrl={job.logoUrl}
                minJdSalary={job.minJdSalary}
                maxJdSalary={job.maxJdSalary}
                salaryCurrencyCode={job.salaryCurrencyCode}
                minExp={job.minExp}
                maxExp={job.maxExp}
                height={600}
                maxWidth={360}
                cardAction
                btn1Label="⚡ Easy Apply"
                btn2Label="Unlock Referral asks"
                setShowMoreModalOpen={setShowMoreModalOpen}
                btnOnClick={() => console.log("Button clicked")}
              />
            </Grid>
          ))
        : !isLoading && <NoDataFound />}
      {isLoading && <Loader componentLoader />}
      {error && <Error />}
      <Box ref={observerTarget} id="observerTarget" height={0.15} />
    </Grid>
  );
}
