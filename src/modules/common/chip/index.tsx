import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import React, { useEffect } from "react";
import { sxStyles } from "./index.styles";

interface ChipData {
  key: number | string;
  label: string;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

interface Props {
  // To use when object is passed
  key?: number | string;
  label?: string;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  // To use when array is passed
  chipsArray?: (ChipData | string)[];
  onDelete?: boolean;
}

const convertToChipData = (array: (ChipData | string)[]): ChipData[] => {
  return array.map((item, index) => {
    if (typeof item === "string") {
      return { key: index, label: item };
    } else {
      return item;
    }
  });
};

export function Chips(props: Props) {
  const [chipData, setChipData] = React.useState<ChipData[]>([]);

  useEffect(() => {
    if (props.chipsArray) {
      setChipData(convertToChipData(props.chipsArray));
    }
  }, [props.chipsArray]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Paper sx={sxStyles.chipPaperStyles} component="ul" elevation={0}>
      {chipData?.length > 0 ? (
        chipData.map((data, id) => {
          return (
            <Chip
              clickable
              sx={sxStyles.chipArrayStyles}
              key={data?.key ? data?.key : id}
              icon={data?.icon}
              label={data?.label}
              onDelete={props.onDelete ? handleDelete(data) : undefined}
            />
          );
        })
      ) : (
        <Chip
          sx={sxStyles.chipStyles}
          key={props?.key}
          icon={props?.icon}
          label={props?.label}
          size="small"
          variant="outlined"
        />
      )}
    </Paper>
  );
}
