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
  isLoading: boolean;
}

const initialState: InitialStateType = {
  jobs: [],
  isLoading: false,
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    isLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    addJob(state, action: PayloadAction<Job>) {
      state.jobs.push(action.payload);
      state.isLoading = false;
    },
  },
});

export const { addJob } = jobsSlice.actions;
export default jobsSlice.reducer;
