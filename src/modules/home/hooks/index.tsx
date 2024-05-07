import { RootState } from "@store/index";
import { jobsList } from "@store/jobs/slice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface useJobsProps {
  limit: number;
  offset: number;
}

export function useJobs() {
  const jobs = useSelector((state: RootState) => state.jobs.jobs);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const getJobsList = async ({ limit, offset }: useJobsProps) => {
    setIsLoading(true);
    const body = JSON.stringify({
      limit: limit,
      offset: offset,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          setError("Failed to fetch data.");
        }
        return response.json();
      })
      .then((data) => {
        const updatedJobsList = {
          jdList: [...jobs.jdList, ...data.jdList],
          totalCount: data.totalCount,
        };

        dispatch(jobsList(updatedJobsList));
        setIsLoading(false);
      })
      .catch((error: Error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  return {
    getJobsList,
    isLoading,
    error,
  };
}
