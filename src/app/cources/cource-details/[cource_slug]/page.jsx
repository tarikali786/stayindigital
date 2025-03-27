import { HeaderData } from "@/data/data";
import Image from "next/image";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Testimonials from "@/component/page/cources/testimonial";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
const CourceDetails = async ({ params }) => {
  const { cource_slug } = await params;
  const courcesCategory = HeaderData.find((item) => item.name === "Cources");

  const courceData = courcesCategory?.items.find(
    (subItem) => subItem.link === `/cources/cource-details/${cource_slug}` // Ensure correct path format
  );
  console.log(courcesCategory);

  return (
    <>
      <div className="md:h-[60vh] h-[40vh] w-full   relative  rounded-b-[100px] shadow-white shadow-2xs overflow-hidden ">
        <Image
          src={courceData?.bannerImage}
          alt={courceData?.name}
          className="object-cover w-full h-full filter z-0  hover:brightness-150"
          priority
        />
        <div className="common-padding absolute top-[10vh] md:top-[20vh] left-0">
          <h2 className="md:text-4xl text-3xl mb-4 text-white">
            {courceData?.name}
          </h2>
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            sx={{
              "& .MuiBreadcrumbs-separator": { opacity: 0.6, color: "gray" },
            }}
          >
            <Link
              underline="hover"
              href="/"
              sx={{ opacity: 0.6, color: "#f9f9f9" }}
              className="flex items-center  justify-center gap-1"
            >
              <HomeIcon sx={{ fontSize: "24px" }} /> Home
            </Link>
            <Link
              underline="hover"
              href="/services"
              sx={{ opacity: 0.6, color: "#f9f9f9" }}
            >
              Cources
            </Link>
            <Typography sx={{ color: "#f9f9f9" }}>
              {courceData?.name}
            </Typography>
          </Breadcrumbs>
        </div>
      </div>

      <div className="text-white/90 common-padding py-10 font-semibold flex md:flex-row flex-col gap-3 ">
        {/* Left Scrollable Section */}

        <div className="md:w-4/5  pr-4">
          <div>
            <h3 className="text-4xl my-4 text-primary">{courceData?.name}</h3>
            <div className="flex flex-col gap-4">
              {courceData?.description?.map((item, index) => (
                <p key={index} className="text-white text-left font-normal">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl mt-8 mb-4  font-normal text-primary">
              What We Offer?{" "}
            </h3>
            <p className=" text-white">{courceData?.whatWeOffer?.title}</p>

            <div className="flex flex-col justify-center  gap-4 mt-6">
              {courceData?.whatWeOffer?.items?.map((item, index) => (
                <p
                  key={index}
                  className="text-white/90 text-left flex items-center gap-2 font-normal"
                >
                  <TaskAltIcon className="text-blue-700" /> {item}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl mt-8 mb-4  font-normal text-primary">
              Why Choose Us?
            </h3>

            <div className="grid sm:grid-cols-2   md:justify-center  gap-4 mt-6">
              {courceData?.whyChooseus?.items?.map((item, index) => (
                <div
                  key={index}
                  className=" flex items-center gap-2 rounded-3xl p-4 bg-white/90 font-normal"
                >
                  <div className="w-1/3 h-[12vh]  relative">
                    <Image
                      src={item?.icon}
                      alt={item?.title}
                      className="object-contain w-full h-full "
                      priority
                    />
                  </div>
                  <h3 className="text-black text-xl w-2/3">{item?.title}</h3>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl mt-8 mb-4  font-normal text-primary">
              Get Started Today !
            </h3>
            <p>{courceData?.gstTitle}</p>
          </div>
        </div>

        {/* Left Sticky Card */}
        <div className="h-[80vh] md:w-1/4 md:sticky md:top-30 med:left-0 p-4  bg-white/80  rounded-xl">
          <p className="uppercase text-primary  font-semibold  text-center">
            Cources
          </p>

          <div className=" space-y-2 flex flex-col  mt-5">
            {courcesCategory?.items.map((cource, index) => (
              <Link key={index} href={cource?.link} className="text-black hover:bg-primary hover:text-white  rounded-md font-normal p-2">
                {cource?.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Testimonials />
    </>
  );
};

export default CourceDetails;
