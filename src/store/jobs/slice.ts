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

interface InitialStateType {
  jobs: Job[];
}

const initialState: InitialStateType = {
  jobs: [],
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJob(state, action: PayloadAction<Job>) {
      state.jobs.push(action.payload);
    },
  },
});

export const { addJob } = jobsSlice.actions;
export default jobsSlice.reducer;
