import { Grid } from "@mui/material";
import { Controller } from "react-hook-form";
import Select from "react-select";
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
  fontSize?: number;
  data: any;
  name: string;
  control: any;
  required?: boolean;
  fontWeight?: number;
  disable?: boolean;
  sendId?: boolean;
  placeholder?: string;
  isMulti?: boolean;
}

export function SelectField({
  data,
  name,
  control,
  title,
  fontSize,
  isMulti,
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
        field: { onChange, onBlur, value },
        fieldState: {  error },
      }) => {
        return (
          <Grid container item width="auto" display="block">
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
            <Grid item xs={12}>
              <Select
                placeholder={placeholder}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: error ? "red" : base.borderColor,
                    fontSize: fontSize,
                    textAlign: "left",
                    fontWeight: 300,
                  }),
                }}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                isDisabled={disable}
                isClearable={true}
                isMulti={isMulti}
                name={name}
                options={data}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </Grid>
            <Error error={error} />
          </Grid>
        );
      }}
    />
  );
}
