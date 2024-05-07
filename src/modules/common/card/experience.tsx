import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface ExperienceProps {
  minExp?: string;
  maxExp?: string;
}

export function Experience({ minExp, maxExp }: ExperienceProps) {
  const [experience, setExperience] = useState<string>("");

  useEffect(() => {
    if (minExp && maxExp) {
      setExperience(minExp === maxExp ? minExp : `${minExp} - ${maxExp}`);
    } else if (minExp) {
      setExperience(minExp);
    } else if (maxExp) {
      setExperience(maxExp);
    } else {
      setExperience("0");
    }
  }, [minExp, maxExp]);

  return (
    <Box id="min-experience" textAlign="start" mb={1}>
      <Typography fontSize={13} fontWeight={500} color="#8b8b8b">
        Minimum Experience
      </Typography>
      <Typography fontSize={13}>{experience} years</Typography>
    </Box>
  );
}
