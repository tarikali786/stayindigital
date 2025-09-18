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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { HeaderData } from "@/data/data";
import Logo from "../../../public/StayInLogo.webp";
import Image from "next/image";
import ButtonCard from "../common/button";

export const MobileMenu = () => {
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(null);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(isOpen);
  };

  const handleExpand = (id) => {
    setExpanded(expanded === id ? null : id); // Toggle submenu open/close
  };

  const menuList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Image
          src={Logo}
          className="h-16 pl-3 w-36 object-contain"
          loading="lazy"
          alt="StayInDigital"
        />
        <Divider />

        {HeaderData.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem disablePadding>
              {item.items ? (
                <ListItemButton onClick={() => handleExpand(item.id)}>
                  <ListItemText primary={item.name} />
                  {expanded === item.id ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </ListItemButton>
              ) : (
                <Link href={item.link} passHref legacyBehavior>
                  <ListItemButton component="a">
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </Link>
              )}
            </ListItem>

            {/* Submenu */}
            {item.items && expanded === item.id && (
              <List sx={{ pl: 4 }}>
                {item?.items.map((subItem) => (
                  <ListItem key={subItem.id} disablePadding>
                    <Link href={subItem.link} passHref legacyBehavior>
                      <ListItemButton component="a">
                        <ListItemText primary={subItem.name} />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                ))}
              </List>
            )}
          </React.Fragment>
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
        <MenuIcon className="text-black" />
      </IconButton>

      {/* Right-Side Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {menuList}
      </Drawer>
    </div>
  );
};
