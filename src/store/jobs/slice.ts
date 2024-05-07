import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Job = {
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
};

type JobsData = {
  jdList: Job[];
  totalCount: number;
};

interface InitialStateType {
  jobs: JobsData;
}

const initialState: InitialStateType = {
  jobs: {
    jdList: [],
    totalCount: 0,
  },
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    jobsList(state, action: PayloadAction<JobsData>) {
      state.jobs = action.payload;
    },
  },
});

export const { jobsList } = jobsSlice.actions;
export default jobsSlice.reducer;
