"use client";
import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { HeaderData } from "@/data/data";
import Logo from "../../../public/StayInLogo.png";
import Image from "next/image";
import ButtonCard from "../common/button";

export const MobileMenu = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(isOpen);
  };

  const menuList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Image
          src={Logo}
          className="h-16 pl-3  w-36 object-contain   "
          loading="lazy"
          alt="StayInDigital"
        />
        <Divider />

        {HeaderData.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Link href={item.link} passHref legacyBehavior>
              <ListItemButton component="a">
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <div className="px-3 pt-5">
        <ButtonCard title="View Brochure" />
      </div>
    </Box>
  );

  return (
    <div>
      {/* Menu Icon Button */}
      <IconButton onClick={toggleDrawer(true)} sx={{ color: "black" }}>
        <MenuIcon className="text-white" />
      </IconButton>

      {/* Right-Side Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {menuList}
      </Drawer>
    </div>
  );
};
