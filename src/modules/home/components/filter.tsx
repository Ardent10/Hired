import { InputField } from "@modules/common/input";
import { SelectField } from "@modules/common/select";
import { Grid } from "@mui/material";
import { Control, FieldValues, UseFormWatch } from "react-hook-form";

interface FilterProps {
  control: Control;
  watch: UseFormWatch<FieldValues>;
}

export function Filter({ control, watch }: FilterProps) {
  return (
    <Grid container spacing={0.5} py={4}>
      <Grid item xs={12} sm={6} md={2}>
        <SelectField
          name="roles"
          title="Roles"
          data={[]}
          control={control}
          selectFieldGridSpace={10}
          required={false}
          fontWeight={400}
          disable={false}
          sendId={false}
          placeholder="Select Company Name"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <SelectField
          name="companySize"
          title="No of Employees"
          placeholder="No of Employees"
          data={[]}
          control={control}
          selectFieldGridSpace={10}
          required={false}
          fontWeight={400}
          disable={false}
          sendId={false}
        />
      </Grid>
      <Grid item xs={6} sm={6} md={1.5}>
        <SelectField
          name="experience"
          title="Experience"
          data={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
            { value: "5", label: "5" },
            { value: "6", label: "6" },
            { value: "7", label: "7" },
            { value: "8", label: "8" },
            { value: "9", label: "9" },
            { value: "10", label: "10" },


          ]}
          control={control}
          selectFieldGridSpace={10}
          required={false}
          fontWeight={400}
          disable={false}
          sendId={false}
          placeholder="Select Company Name"
        />
      </Grid>
      <Grid item xs={6} sm={6} md={1.5}>
        <SelectField
          name="Remote"
          title="Remote"
          data={[
            { value: "remote", label: "Remote" },
            { value: "hybrid", label: "Hybrid" },
            { value: "in office", label: "In Office" },
          ]}
          control={control}
          required={false}
          fontWeight={400}
          disable={false}
          sendId={false}
          placeholder="Select Company Name"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2.5}>
        <SelectField
          name="minBasePay"
          title="Min Base Pay"
          data={[
            { value: "0", label: "0L" },
            { value: "10", label: "10L" },
            { value: "20", label: "20L" },
            { value: "30", label: "30L" },
            { value: "40", label: "40L" },
            { value: "50", label: "50L" },
            { value: "60", label: "60L" },
            { value: "70", label: "70L" },
          ]}
          control={control}
          required={false}
          fontWeight={400}
          disable={false}
          sendId={false}
          placeholder="Select Company Name"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2.5}>
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
