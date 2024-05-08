/* eslint-disable no-constant-condition */
import { Backdrop } from "@mui/material";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

interface props {
  children?: React.ReactElement;

  open: boolean;
  transform?: string;
  BackdropClick?: boolean;
  CloseModal: any;
  OpenModal?: any;
  backdropBackgroundColor?: string;
  opacity?: string;
  className?: string;
}

export function BasicModal({

  open,

  CloseModal,
  OpenModal,
  BackdropClick,

  children,

}: props) {
  const handleBackdropClick = (reason: "backdropClick" | "escapeKeyDown") => {
    if (reason !== "backdropClick" || "escapeKeyDown") {
      OpenModal;
    }
  };
  return (
    <Modal
      open={open}
      onClose={BackdropClick === true ? handleBackdropClick : CloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableEscapeKeyDown={true}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open} >
        <Box sx={style}>{children}</Box>
      </Fade>
    </Modal>
  );
}
