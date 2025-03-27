import { HeaderData } from "@/data/data";
import Image from "next/image";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Testimonials from "@/component/page/cources/testimonial";
import ButtonCard from "@/component/common/button";
import HomeIcon from "@mui/icons-material/Home";
const ServiceDetails = async ({ params }) => {
  const { service_slug } = await params;
  const serviceCategory = HeaderData.find((item) => item.name === "Services");

  const serviceData = serviceCategory?.items.find(
    (subItem) => subItem.link === `/services/service-details/${service_slug}`
  );

  return (
    <>
      <div className="h-[60vh] w-full   relative  rounded-b-[100px] shadow-white shadow-2xs overflow-hidden ">
        <Image
          src={serviceData?.image}
          alt={serviceData?.name}
          className="object-cover w-full h-full filter z-0  hover:brightness-150"
          priority
        />
        <div className="common-padding absolute top-[20vh] left-0">
          <h2 className="md:text-4xl text-3xl mb-4 text-white">
            {serviceData?.name}
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
              Services
            </Link>
            <Typography sx={{ color: "#f9f9f9" }}>
              {serviceData?.name}
            </Typography>
          </Breadcrumbs>
        </div>
      </div>


      
      <div className=" text-white common-padding  py-10  font-semibold text-center">
        <div>
          <p className=" uppercase text-sm text-primary   ">services</p>
          <h3 className="text-4xl my-4 text-white">{serviceData?.name}</h3>
          <p className="text-white/90 max-w-3xl font-normal m-auto text-sm">
            {serviceData?.subTitle}
          </p>
        </div>

        <div className="my-10">
          <h2 className="text-3xl  text-primary">
            {serviceData?.service?.title}
          </h2>

          <div className="grid  lg:grid-cols-3 md:grid-cols-2   gap-10 my-10">
            {serviceData?.service?.services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-4 shadow-primary rounded-xl  text-left   "
              >
                <div className="w-20 h-16 mb-3 relative">
                  <Image
                    src={serviceData?.service?.bgimage}
                    alt={serviceData?.name}
                    priority
                    className="object-contain h-full w-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-left  text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600  font-normal mt-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ButtonCard link="/contact" title="Get Service" />
      </div>
      <Testimonials />
    </>
  );
};

export default ServiceDetails;
