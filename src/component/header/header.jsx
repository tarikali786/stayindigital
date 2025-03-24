import React from "react";
import Image from "next/image";
import Logo from "../../../public/Logo2.0.png";
import Link from "next/link";
import ButtonCard from "../common/button";
import { HeaderData } from "@/data/data";
import { MobileMenu } from "./header-menu";

const Header = () => {
  return (
    <div className=" bg-black  py-4 common-padding   text-white sticky top-11 z-50 flex items-center gap-4  justify-between ">
      <Link href="/">
        <Image
          src={Logo}
          className=" object-contain   "
          loading="lazy"
          alt="StayInDigital"
        />
      </Link>
      <div className=" hidden md:flex items-center lg:gap-10 md:gap-6 sm:gap-4 gap-4">
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
        <div className="hidden md:block">
          <ButtonCard title="View Brochure" />
        </div>
        <div className="md:hidden block">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
