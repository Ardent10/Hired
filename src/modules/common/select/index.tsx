import {
  Grid,
  ListItemIcon,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { Error } from "../error";
import { InputLabel } from "../input/inputLabel";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
    },
  },
};

interface SelectorProps {
  title?: string;
  flexDirection?: string;
  fontSize?: number;
  data: any;
  name: string;
  control: any;
  selectFieldGridSpace?: number;
  required?: boolean;
  fontWeight?: number;
  disable?: boolean;
  sendId?: boolean;
  placeholder?: string;
}

export function SelectField({
  data,
  name,
  control,
  title,
  flexDirection,
  fontSize,
  selectFieldGridSpace,
  required,
  fontWeight,
  disable,
  sendId,
  placeholder,
}: SelectorProps) {
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
          <Grid container width={"100%"}>
            {title && (
              <Grid item>
                <InputLabel
                  id="demo-multiple-checkbox-label"
                  label={title}
                  required={required}
                  fontSize={fontSize}
                  fontWeight={fontWeight}
                  visibility={value ? "visible" : "hidden"}
                />
              </Grid>
            )}
            <Grid item xs={flexDirection === "row" ? selectFieldGridSpace : 12}>
              <Select
                placeholder={placeholder}
                size="small"
                sx={{
                  width: "100%",
                  textAlign: "left",
                  borderRadius: "5px",
                }}
                defaultValue={""}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                input={<OutlinedInput />}
                error={
                  error || (required && isTouched && !value) ? true : false
                }
                inputRef={ref}
                required={required}
                MenuProps={MenuProps}
                inputProps={{
                  "aria-label": "Without label",
                }}
                disabled={disable}
                renderValue={(selected) => {
                  if (selected?.length === 0) {
                    return <Typography>{placeholder}</Typography>;
                  }

                  return selected.join(", ");
                }}
              >
                {data.map((d: any) => {
                  return (
                    <MenuItem
                      key={d.id ? d.id : d.label}
                      value={sendId === true ? d.id : d.label}
                    >
                      {d.icon && (
                        <ListItemIcon>
                          <img src={d.icon} alt="icon" height={10} width={10} />
                        </ListItemIcon>
                      )}
                      {(d.showLabel && d.showLabel) || d.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
            <Error error={error} />
          </Grid>
        );
      }}
    />
  );
}
