import React, { useState } from "react";
import { Box, Typography, styled, Menu, MenuItem } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Component = styled(Menu)`
  margin-top: 5px;
`;

const Logoutt = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;
const Profile = ({ accountt,setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const Logout = () => {
    setAccount("");
  };
  return (
    <>
      <Box onClick={(e) => handleClick(e)}>
        <Typography style={{ marginTop: 2, cursor: "pointer" }}>
          {accountt}
        </Typography>
      </Box>
      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            Logout();
          }}
        >
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logoutt>Logout</Logoutt>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
