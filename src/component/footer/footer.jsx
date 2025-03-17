import { FooterData } from "@/data/data";
import { Divider } from "@mui/material";
import Link from "next/link";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
const Footer = () => {
  return (
    <div className="bg-black px-2 py-4 lg:py-8 md:px-[6%] lg:px-[10%] xl:px-[16%] sm:px-6 text-white sticky top-11 z-50 ">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12 sm:items-start    ">
        <div>
          <h1 className="lg:text-[28px] font-['lato'] md:text-[26px] sm:text-[20px] text-xl text-primary">
            ITEKDIGIT
          </h1>
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
            <p key={index} className="text-sm leading-5.5 mt-3">
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
            <a
              key={item.id}
              href={item.link}
              className="block  mt-3 text-sm hover:underline"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Courses */}
        <div>
          <h3 className="font-bold text-lg text-primary">
            {FooterData.courses.title}
          </h3>
          {FooterData.courses.links.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="block  mt-3 text-sm hover:underline"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <hr className="text-gray-600 my-6" />
      <div className="flex justify-between items-center ">
        <p className="text-primary text-sm ">
          Copyright 2025 ITEKDIGIT | All Rights Reserved
        </p>
        <div className="text-primary flex gap-6 flex-wrap ">
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
