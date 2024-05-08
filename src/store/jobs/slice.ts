import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Job = {
  jdUid: string;
  companyName: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  jobRole: string;
  location: string;
  logoUrl: string;
  maxExp?: number;
  maxJdSalary?: number;
  minExp?: number;
  minJdSalary?: number;
  salaryCurrencyCode: string;
  techStack?: string;
  companySize?: string;
};

type JobsData = {
  jdList: Job[];
  totalCount: number;
};

export interface InitialStateType {
  jobs: JobsData;
  filteredJobsList: JobsData;
}

const initialState: InitialStateType = {
  jobs: {
    jdList: [],
    totalCount: 0,
  },
  filteredJobsList: {
    jdList: [],
    totalCount: 0,
  },
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    filteredJobsList(state, action: PayloadAction<JobsData>) {
      state.jobs = action.payload;
    },
    jobsList(state, action: PayloadAction<JobsData>) {
      state.jobs = action.payload;
    },
  },
});

export const { jobsList, filteredJobsList } = jobsSlice.actions;
export default jobsSlice.reducer;
