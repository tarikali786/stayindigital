import { ArrowRightAltRounded } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const ButtonCard = ({ title = "Contact Us", link = "#" }) => {
  return link ? (
    <Link
      href={link}
      className="bg-gradient-to-r from-[#103ce7] to-[#64e9ff] px-6 py-1.5  text-nowrap rounded-4xl w-min gap-2 flex items-center justify-center text-white font-medium "
    >
      {title}{" "}
      <div className="size-10  rounded-full bg-white flex items-center justify-center">
        <ArrowRightAltRounded className="text-black" />
      </div>
    </Link>
  ) : (
    <button className="bg-primary px-4  text-nowrap py-2 rounded text-white font-medium ">
      {title}
    </button>
  );
};

export default ButtonCard;
