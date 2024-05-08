import { BasicCard } from "@components/card";
import { Loader } from "@modules/common/loader";
import { Box, Grid } from "@mui/material";
import { InitialStateType, Job } from "@store/jobs/slice";
import { Dispatch, useEffect, useRef, useState } from "react";
import { Error } from "../components/error";
import { NoDataFound } from "../components/noDataFound";
import { DetailedJobModal } from "./detailedJobModal";

interface JobCardListProps {
  isLoading: boolean;
  error: string | null;
  jobs: Job[];
  state: InitialStateType;
  setShowMoreModalOpen: (value: boolean) => void;
  openShowMoreModal: boolean;
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
  openShowMoreModal,
  setApiData,
  apiData,
  state,
}: JobCardListProps) {
  const [modalData, setModalData] = useState<Job | null | undefined>(null);
  const totalJobCount = state.jobs.totalCount || 947;
  const filteredJobsCount = state.filteredJobsList;
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

  function handleViewJobClick(jobId: string) {
    const job = jobs.find((job) => job.jdUid === jobId);
    setModalData(job);
  }

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
                btnOnClick={() => setShowMoreModalOpen(true)}
                handleViewJobClick={() => handleViewJobClick(job.jdUid)}
              />
            </Grid>
          ))
        : !isLoading && <NoDataFound />}
      {isLoading && <Loader componentLoader />}
      {error && <Error />}
      <Box ref={observerTarget} id="observerTarget" height={0.15} />
      {openShowMoreModal && (
        <DetailedJobModal
          open={openShowMoreModal}
          CloseModal={() => setShowMoreModalOpen(false)}
          data={modalData}
        />
      )}
    </Grid>
  );
}
