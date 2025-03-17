import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import ButtonCard from "../common/button";
import { HeaderData } from "@/data/data";
const Header = () => {
  return (
    <div className=" bg-black px-2 py-4 md:px-[6%] lg:px-[10%] xl:px-[16%] sm:px-6 text-white sticky top-11 z-50 flex items-center gap-4  justify-between ">
      <h1 className="lg:text-[34px] font-['lato'] md:text-[30px] sm:text-[26px] text-xl">
        ITEKDIGIT
      </h1>
      <div className="flex items-center lg:gap-10 md:gap-6 sm:gap-4 gap-4">
        {HeaderData?.map((item) => (
          <Link
            className="text-[16px] text-white text-nowrap"
            key={item.id}
            href={item.link}
          >
            {item?.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center lg:gap-8 md:gap-4 sm:gap-2">
        <SearchIcon className=" cursor-pointer" />
        <ButtonCard title="View Brochure" />
      </div>
    </div>
  );
};

export default Header;
