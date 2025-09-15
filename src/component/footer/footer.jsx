import { FooterData } from "@/data/data";
import Logo from "../../../public/logo.png";

import Link from "next/link";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-white common-padding py-8 border-t border-white/50  z-50 ">
      <div className="grid lg:grid-cols-[1.2fr_1fr_1fr_1fr] md:grid-cols-2 sm:grid-cols-1 gap-12 sm:items-start text-center   sm:text-left ">
        <div className="flex flex-col justify-center sm:items-start  items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className=" relative size-10 md:size-14">
              <Image
                src={Logo}
                className=" object-contain    "
                priority
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                alt="StayInDigital"
              />
            </div>

            <h1 className="md:text-xl text-primary">Stay in Digital</h1>
          </Link>
          <p className="text-sm mt-2 leading-5.5">
            At Stay In Digital, we specialize in transforming businesses with
            innovative digital marketing strategies. Our team of experts is
            dedicated to helping you connect with your audience, increase your
            online visibility,and drive growth. With years of experience in the
            industry, we provide a comprehensive range of digital marketing
            services tailored to your unique needs.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg text-primary">
            {FooterData.getInTouch.title}
          </h3>
          {FooterData.getInTouch.address.map((line, index) => (
            <p key={index} className="text-sm text-black leading-5.5 mt-3">
              {line}
            </p>
          ))}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg text-primary">
            {FooterData.quickLinks.title}
          </h3>
          {FooterData.quickLinks.links.map((item) => (
            <div key={item.id} className="text-black">
              <Link href={item.link}>{item.name}</Link>
            </div>
          ))}
        </div>

        {/* Courses */}
        <div>
          <h3 className="font-bold text-lg text-primary">
            {FooterData.Courses.title}
          </h3>
          {FooterData.Courses.links.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="block text-black  mt-3 text-sm hover:underline"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <hr className="text-gray-600 my-6" />
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
        <p className="text-primary text-sm ">
          Copyright 2025 ITEKDIGIT | All Rights Reserved
        </p>
        <div className="text-primary flex justify-center gap-6 flex-wrap ">
          <Link href="site-map">Site Map</Link>

          <Link href="privacy-policy">Privacy Policy</Link>
          <Link href="site-map">Terms & Conditions</Link>

          <div className="flex gap-4 text-primary">
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
      </div>
    </div>
  );
};

export default Footer;
