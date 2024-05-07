import { Grid, Typography } from "@mui/material";

interface props {
  label?: string;
  required?: boolean;
  fontSize?: number;
  direction?: string;
  fontWeight?: number;
  color?: string;
  id?: string;

  visibility?:
    | "visible"
    | "hidden"
    | "collapse"
    | "initial"
    | "inherit"
    | "unset"
    | undefined;
}

export function InputLabel({
  label,
  required,
  fontSize,
  direction,
  color,
  fontWeight,
  visibility,
  id,
}: props) {
  return (
    <Grid>
      <Typography
        id={id}
        component="h4"
        variant="h6"
        fontSize={fontSize ? fontSize : 12}
        fontWeight={fontWeight ? fontWeight : 300}
        color="#000"
        visibility={visibility}
      >
        {label}
        {required && <span className="text-red-600">*</span>}
      </Typography>
    </Grid>
  );
}
