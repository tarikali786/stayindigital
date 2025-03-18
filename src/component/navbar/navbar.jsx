import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className=" bg-[#0f0a18] py-2.5 common-padding h-11 z-50 sticky top-0 left-0 flex justify-between shadow-md gap-2 flex-wrap ">
      <div className="flex md:gap-20 sm:gap-10 gap-4">
        {/* Clickable Email */}
        <a
          href="mailto:info@itechdigit.com"
          className="text-primary text-sm font-semibold flex items-center gap-1"
        >
          <EmailIcon />:
          info@itechdigit.com
        </a>

        {/* Clickable Phone */}
        <a
          href="tel:7010189969"
          className="text-primary text-sm font-semibold flex items-center gap-1"
        >
          <LocalPhoneIcon />:
          7010189969
        </a>
      </div>

      <div className="flex gap-6 text-primary">
        <Link target="_blank" href={"https://facebook.com/"}>
          <FacebookIcon />
        </Link>
        <Link target="_blank" href={"https://www.instagram.com/"}>
          <InstagramIcon />
        </Link>

        <Link target="_blank" href={"https://x.com/home?lang=en"}>
          <XIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
