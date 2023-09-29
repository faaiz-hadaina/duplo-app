import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/features/ui/uiSlice";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F9F9F9",
  padding: "10px",
  textAlign: "left",
  color: "#828282",
  fontSize: "0.7em",
  boxShadow: "none",
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 20,
  p: 4,
};

export default function OrderDetails() {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state?.ui) || {};
  const selectedTransaction = {};

  const handleClose = () => {
    dispatch(closeModal());
  };

  const orderDetails = selectedTransaction?.orderDetails;
  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-US").format(amount);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ui?.isModalOpened}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={ui?.isModalOpened}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{ textAlign: "center" }}
            >
              Order Details
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Stack spacing={2}>
                <Box>
                  <Box
                    sx={{
                      fontSize: "1.2em",
                      fontWeight: "700",
                      mt: 2,
                      textAlign: "center",
                    }}
                  >
                    ₦{formatAmount(orderDetails?.totalAmount)}
                  </Box>
                </Box>
                <Item>
                  <Typography>Total Orders</Typography>
                  <Typography>{orderDetails?.totalOrders}</Typography>
                </Item>
                <Item>
                  <Typography>Today's Total Amount</Typography>
                  <Typography>
                    ₦{formatAmount(orderDetails?.todayTotalAmount)}
                  </Typography>
                </Item>
                <Item>
                  <Typography>Today's Total Orders</Typography>
                  <Typography>{orderDetails?.todayTotalOrders}</Typography>
                </Item>
              </Stack>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
