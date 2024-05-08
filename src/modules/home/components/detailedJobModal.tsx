import { BasicModal } from "@modules/common/modal";
import { Box, Stack, Typography } from "@mui/material";

interface DetailedJobModalProps {
  open: boolean;
  CloseModal: () => void;
  data?: any;
}

export function DetailedJobModal({
  open,
  CloseModal,
  data,
}: DetailedJobModalProps) {
  return (
    <BasicModal open={open} CloseModal={CloseModal}>
      <Box py={5} bgcolor="#FFF">
        <Stack>
          <Box display="flex" gap={4}>
            <img src={data.logoUrl} alt="logo" style={{ borderRadius: 8 }} />
            <Box>
              <Typography variant="h4" color="primary">
                {data?.companyName}
              </Typography>
              <Typography
                variant="h6"
                color="primary"
                textTransform={"capitalize"}
              >
                {data?.jobRole}
              </Typography>
              <Typography
                variant="body1"
                fontSize={16}
                color="primary"
                textTransform={"capitalize"}
              >
                {data?.location}
              </Typography>
              <Typography variant="body1" color="primary">
                {data?.minExp} - {data?.maxExp} years
              </Typography>
              <Typography variant="body1" color="primary">
                {data?.minJdSalary} - {data?.maxJdSalary}{" "}
                {data?.salaryCurrencyCode}
              </Typography>
            </Box>
          </Box>
          <Box pt={4}>
            <Typography variant="h6" color="primary">
              Job Description
            </Typography>
            <Typography variant="body1" color="primary">
              {data?.jobDetailsFromCompany}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </BasicModal>
  );
}
