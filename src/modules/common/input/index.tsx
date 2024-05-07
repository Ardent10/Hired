import { Grid, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { Error } from "../error";
import { InputLabel } from "./inputLabel";

interface props {
  name: string;
  type: string;
  placeholder?: string;
  direction?: "row" | "column";
  disable?: boolean;
  control?: any;
  required?: boolean;
  label?: string;
  inputPadding?: string | number;
  inputFieldGridSpace?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  onChange?: any;
  rest?: any;
  maxDate?: Date | string;
  minDate?: Date | string;
  inputFieldPadding?: string | number;
  className?: string;
}

export const InputField = ({
  name,
  type,
  placeholder,
  direction,
  disable,
  control,
  required,
  label,
  inputPadding,
  inputFieldGridSpace,
  rest,
  maxDate,
  minDate,
  onChange,
  className,
}: props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { isTouched, isDirty, error },
        formState: { isValid },
      }) => {
        return (
          <Grid
            container
            direction={direction}
            alignItems={direction === "row" ? "center" : ""}
          >
            <InputLabel
              label={label}
              required={required}
              fontWeight={400}
              fontSize={13}
              color={"#8a89fa"}
              visibility={value ? "visible" : "hidden"}
            />

            <Grid item xs={direction === "row" ? inputFieldGridSpace : 12}>
              <TextField
                sx={{
                  borderRadius: "5px",
                  ".MuiOutlinedInput-root": {
                    padding: inputPadding && inputPadding,
                  },
                }}
                type={type}
                placeholder={placeholder}
                fullWidth={true}
                InputLabelProps={{
                  shrink: false,
                }}
                disabled={disable}
                size="small"
                error={
                  error || (required && isTouched && !value) ? true : false
                }
                value={value}
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                inputRef={ref}
                inputProps={{
                  max: maxDate ? maxDate : undefined,
                  min: minDate ? minDate : undefined,
                }}
                onKeyDown={(e) => (type === "date" ? e.preventDefault() : {})}
                className={className}
                {...rest}
              />
            </Grid>
            <Error error={error} />
          </Grid>
        );
      }}
    />
  );
};
