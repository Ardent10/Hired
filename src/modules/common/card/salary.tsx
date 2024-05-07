import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomTooltip } from "../tooltip";

interface SalaryProps {
  minJdSalary?: number;
  maxJdSalary?: number | null;
  salaryCurrencyCode?: string;
}

export function Salary({
  minJdSalary = 0,
  maxJdSalary,
  salaryCurrencyCode,
}: SalaryProps) {
  const [minSalary, setMinSalary] = useState<number | null>(null);
  const [maxSalary, setMaxSalary] = useState<number | null>(null);
  const [isInCr, setIsInCr] = useState<boolean>(false);

  useEffect(() => {
    if (minJdSalary) {
      const minSalary = minJdSalary >= 100 ? minJdSalary / 100 : minJdSalary;
      setMinSalary(minSalary);
    }
    if (maxJdSalary) {
      const maxSalary = maxJdSalary >= 100 ? maxJdSalary / 100 : maxJdSalary;
      setMaxSalary(maxSalary);
    }

    if (minJdSalary >= 100 || (maxJdSalary && maxJdSalary >= 100)) {
      setIsInCr(true);
    }
  }, [minJdSalary, maxJdSalary]);

  return (
    <Typography fontSize={14} color="#4d596a" gutterBottom>
      {minSalary === null || maxJdSalary == null ? (
        <Typography fontSize={14} color="#4d596a" gutterBottom>
          Estimated Salary: {salaryCurrencyCode} {minSalary} {maxSalary}{" "}
          {isInCr ? "Cr" : "LPA"}{" "}
          <CustomTooltip label="Offered Salary Range" placement="top">
            <span>✅</span>
          </CustomTooltip>
        </Typography>
      ) : (
        <Typography fontSize={14} color="#4d596a" gutterBottom>
          Estimated Salary: {salaryCurrencyCode} {minSalary}{" "}
          {minJdSalary !== undefined && "-"} {isInCr ? maxSalary! : maxSalary}{" "}
          {isInCr ? "Cr" : "LPA"}{" "}
          <CustomTooltip label="Offered Salary Range" placement="top">
            <span>✅</span>
          </CustomTooltip>
        </Typography>
      )}
    </Typography>
  );
}
