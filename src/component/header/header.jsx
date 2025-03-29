"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Link from "next/link";
import ButtonCard from "../common/button";
import { HeaderData } from "@/data/data";
import { MobileMenu } from "./header-menu";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState("");

  return (
    <div className=" bg-white  py-2 common-padding shadow-md   text-black sticky top-11 z-50 flex items-center gap-4  justify-between ">
      <Link href="/" className="flex  items-center gap-1 justify-start">
        <div className=" relative md:size-14 size-10">
          <Image
            src={Logo}
            className=" object-contain  w-full h-full  "
            alt="StayInDigital"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            priority
          />
        </div>

        <h1 className="md:text-xl text-primary">Stay in Digital</h1>
      </Link>
      <div className="hidden md:flex items-center lg:gap-10 md:gap-6 sm:gap-4 gap-4">
        {HeaderData?.map((item) => (
          <div className="relative" key={item.id}>
            <Link
              className="text-[16px] text-black text-nowrap hover:text-primary hover:font-semibold"
              href={item.link}
              onMouseOver={() => setIsOpen(item.id)}
            >
              {item?.name}
            </Link>

            {item?.items && isOpen == item?.id && (
              <div
                onMouseLeave={() => setIsOpen("")}
                className="absolute min-w-full text-nowrap bg-white py-4 px-2 shadow-md shadow-blue-300 rounded-2xl top-8 -left-14 "
              >
                {item?.items.map((subItem, index) => (
                  <Link
                    key={index}
                    href={subItem.link}
                    onClick={() => setIsOpen("")}
                    className="block text-black p-2 hover:bg-gradient-to-r hover:from-[#103ce7] hover:to-[#64e9ff] hover:text-white rounded-md"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
