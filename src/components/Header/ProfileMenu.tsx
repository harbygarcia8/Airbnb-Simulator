import React, { useState } from "react";
import { MenuRounded } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import "../../styles/Header.scss"

function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="profile-menu-flex"
      >
        <MenuRounded />
        <img className="img" alt='Photo of Harby' src='https://unavatar.io/harbygarcia8'/>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": {
            minWidth: "200px",
            borderRadius: "1rem",
            boxShadow: "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)",
          },
        }}
      >
        <MenuItem className="menu-items" onClick={handleClose}>
          <strong>Registrate</strong>
        </MenuItem>
        <MenuItem onClick={handleClose} className="menu-items">
          Cerrar sesión
        </MenuItem>
        <div
          style={{
            height: "1px",
            backgroundColor: "gs.$neutral01",
            width: "100%",
          }}
        />
        <MenuItem onClick={handleClose} className="menu-items">
          Pon tu espacio en Airbnb
        </MenuItem>
        <MenuItem onClick={handleClose} className="menu-items">
          Centro de ayuda
        </MenuItem>
      </Menu>
    </div>
  );
}

export default ProfileMenu;
