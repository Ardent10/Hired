import { InputField } from "@modules/common/input";
import { SelectField } from "@modules/common/select";
import { Grid } from "@mui/material";
import { RootState } from "@store/index";
import { Job, filteredJobsList } from "@store/jobs/slice";
import { selectFieldData } from "@utils/filterOptionsData";
import { useEffect, useMemo, useState } from "react";
import { Control, FieldValues, UseFormWatch } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

interface FilterProps {
  control: Control;
  watch: UseFormWatch<FieldValues>;
}

export function Filter({ control, watch }: FilterProps) {
  const dispatch = useDispatch();
  const [filteredJobsArray, setFilteredJobsArray] = useState<Job[]>([]);
  const state = useSelector((state: RootState) => state.jobs);
  const jobs = state?.jobs?.jdList;

  const roles = watch("roles");
  const companySize = watch("companySize");
  const experience = watch("experience");
  const remote = watch("remote");
  const techStack = watch("techStack");
  const minBasePay = watch("minBasePay");
  const companyNames = watch("companyName");

  const filters = useMemo(() => {
    return {
      roles,
      companySize,
      experience,
      remote,
      techStack,
      minBasePay,
      companyNames,
    };
  }, [
    roles,
    companySize,
    experience,
    remote,
    techStack,
    minBasePay,
    companyNames,
  ]);

  const handleFilterJobArray = jobs.filter((job) => {
    // Filtering logic based on filter values
    return Object.entries(filters).some(([filterName, filterValue]) => {
      if (!filterValue) return false; // Skip empty filters

      switch (filterName) {
        case "roles":
          // Get an array of role values from filterValue
          return filterValue.some(
            (option: any) => option.value.trim() === job.jobRole.trim()
          );

        case "companySize":
          // Get an array of company size values from jobsList against companySize
          return (
            job.companySize &&
            filterValue.some(
              (option: any) =>
                option.value.trim() == (job.companySize ?? "").trim()
            )
          );

        case "experience":
          // Check for experience range using minExp and maxExp
          return (
            // if job.minExp is present and greater than or equal to filterValue
            job.minExp && job.maxExp
              ? job.minExp <= filterValue.value // set true if job.maxExp is present and greater than or equal to filterValue
              : job.minExp
              ? filterValue.value >= job.minExp // set true if job.minExp is present and less than or equal to filterValue
              : job.maxExp // set true if job.maxExp is present and greater than or equal to filterValue
              ? filterValue.value >= job.maxExp
              : false // set false if none of the above conditions are met
          );
        case "remote":
          // Exact match for remote flaga
          return filterValue.some(
            (option: any) => option.value.trim() == job.location.trim()
          );
        case "techStack":
          // Array comparison for tech stack (multiple technologies possible)
          // Assuming techStack is an array of strings
          return (
            job.techStack &&
            filterValue.some((tech: string) =>
              (job.techStack ?? "").includes(tech)
            )
          );
        case "minBasePay":
          // Check if minBasePay is present and less than or equal to job's minJdSalary
          return (
            // if job.minJdSalary is present and greater than or equal to filterValue
            job.minJdSalary && job.maxJdSalary
              ? job.maxJdSalary >= filterValue.value // set true if job.maxJdSalary is present and greater than or equal to filterValue
              : job.minJdSalary
              ? filterValue.value >= job.minJdSalary // set true if job.minJdSalary is present and less than or equal to filterValue
              : job.maxJdSalary // set true if job.maxJdSalary is present and greater than or equal to filterValue
              ? filterValue.value <= job.maxJdSalary
              : false // set false if none of the above conditions are met
          );

        case "companyNames":
          return filterValue == job.companyName;
        default:
          return false; // Handle cases for future filters
      }
    });
  });
  useEffect(() => {
    setFilteredJobsArray(handleFilterJobArray);
  }, [filters]);

  useEffect(() => {
    if (filteredJobsArray.length === 0) return;
    dispatch(
      filteredJobsList({
        jdList: filteredJobsArray,
        totalCount: filteredJobsArray?.length,
      })
    );
    setFilteredJobsArray([]);
  }, [filteredJobsArray]);

  console.log("State", state, "filteredJobs", filteredJobsArray);
  return (
    <Grid
      container
      spacing={0.5}
      py={4}
      display="flex"
      alignItems="center"
      textAlign="start"
      fontWeight={300}
      flexWrap="wrap"
    >
      <Grid item xs={12} sm={6} md="auto" lg="auto">
        <SelectField
          name="roles"
          title="Roles"
          data={selectFieldData.roles}
          control={control}
          required={false}
          fontWeight={400}
          disable={false}
          sendId={false}
          placeholder="Roles"
          fontSize={12}
          isMulti={true}
        />
      </Grid>
      <Grid item xs={12} sm={6} md="auto" lg="auto">
        <SelectField
          name="companySize"
          title="No of Employees"
          placeholder="No of Employees"
          data={selectFieldData.companySize}
          control={control}
          required={false}
          fontWeight={400}
          disable={false}
          sendId={false}
          fontSize={12}
          isMulti={true}
        />
      </Grid>
      <Grid item xs={12} sm={6} md="auto" lg="auto">
        <SelectField
          name="experience"
          title="Experience"
          data={selectFieldData.experience}
          control={control}
          required={false}
          fontWeight={400}
          disable={false}
          sendId={false}
          placeholder="Experience"
          fontSize={12}
        />
      </Grid>
      <Grid item xs={12} sm={6} md="auto" lg="auto">
        <SelectField
          name="remote"
          title="Remote"
          data={selectFieldData.remote}
          control={control}
          required={false}
          fontWeight={400}
          disable={false}
          sendId={false}
          placeholder="Remote"
          fontSize={12}
          isMulti={true}
        />
      </Grid>
      <Grid item xs={12} sm={6} md="auto" lg="auto">
        <SelectField
          name="techStack"
          title="Tech Stack"
          data={selectFieldData.techStack}
          control={control}
          required={false}
          fontWeight={400}
          disable={false}
          sendId={false}
          placeholder="Tech Stack"
          fontSize={12}
          isMulti={true}
        />
      </Grid>
      <Grid item xs={12} sm={6} md="auto" lg="auto">
        <SelectField
          name="minBasePay"
          title="Min Base Pay"
          data={selectFieldData.minBasePay}
          control={control}
          required={false}
          fontWeight={400}
          disable={false}
          sendId={false}
          placeholder="Minimum Base Pay Salary"
          fontSize={12}
        />
      </Grid>
      <Grid item xs={12} sm={6} md="auto" lg="auto">
        <InputField
          name="companyName"
          label="Company Name"
          type="text"
          control={control}
          placeholder="Search company name"
        />
      </Grid>
    </Grid>
  );
}
