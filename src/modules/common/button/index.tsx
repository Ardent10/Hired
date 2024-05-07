import { Button, CircularProgress } from "@mui/material";
import { ReactNode, useState } from "react";
import { ButtonProps } from "./types";
import { sxStyles } from "./index.styles";

export function PrimaryButton(props: ButtonProps) {
  const [isLoading] = useState(false || props.isLoading);
  const styles = sxStyles(props);

  return (
    <Button
      disableElevation={props.disableElevation && props.disableElevation}
      href={props.link ? props.link : ""}
      onClick={props.onClick}
      type={props.type}
      variant={props.variant}
      disabled={props.disabled || isLoading}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      fullWidth
      sx={styles.btnStyles}
    >
      <>
        {props?.showLoaderonBtn && isLoading ? (
          <CircularProgress size={20} sx={styles.progressStyles} />
        ) : (
          <>
            {props.buttonChild && props.buttonChild}
            {props.title}
          </>
        )}
      </>
    </Button>
  );
}
