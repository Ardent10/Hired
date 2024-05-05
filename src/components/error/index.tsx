import { Typography } from "@mui/material";
import { FieldError } from "react-hook-form";
interface props {
  error?: FieldError;
}

export function Error({ error }: props) {
  return error && <Typography className="text-xs text-red-600">{error.message}</Typography>;
}
