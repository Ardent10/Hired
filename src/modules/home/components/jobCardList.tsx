import { BasicCard } from "@components/card";
import { Loader } from "@modules/common/loader";
import { Box, Grid } from "@mui/material";
import { forwardRef } from "react";
import { Error } from "../components/error";
import { NoDataFound } from "../components/noDataFound";

interface JobCardListProps {
  isLoading: boolean;
  error: string | null;
  jobs: any;
  setShowMoreModalOpen: any;
}

export const JobCardList = forwardRef<HTMLDivElement, JobCardListProps>(
  function JobCardList(
    { isLoading, error, jobs, setShowMoreModalOpen }: JobCardListProps,
    ref
  ) {
    return (
      <Grid container spacing={8}>
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
                {index === jobs.length - 1 && (
                  <Box ref={ref} id="observerTarget" />
                )}
              </Grid>
            ))
          : !isLoading && <NoDataFound />}
        {isLoading && <Loader />}
        {error && <Error />}
      </Grid>
    );
  }
);
