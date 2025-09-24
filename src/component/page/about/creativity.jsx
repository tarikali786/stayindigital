import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Img1 from "../../../../public/7I.webp";
import Img2 from "../../../../public/8I.webp";
import Image from "next/image";
const item = [
  {
    icon: TaskAltIcon,
    text: "Only 15 students per batch",
  },
  {
    icon: TaskAltIcon,
    text: "Flexible classing",
  },
  {
    icon: TaskAltIcon,
    text: "Learn in your comfortable language", 
  },
  {
    icon: TaskAltIcon,
    text: "Re- Schedule Class available for any reasons",
  },
];

const Creativity = () => {
  return (
    <div className="relative common-padding py-10 mx-auto ">
      <div className=" relative  w-full flex  justify-end gap-6 flex-col sm:flex-row ">
        <div className="sm:w-1/2 w-full sm:absolute top-8  xl:left-20 md:left-10 sm:left-6   px-4 sm:px-6 lg:px-8 bg-white rounded-md sm:h-[56vh] h-[40vh] flex  flex-col justify-center gap-6">
          {item.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <item.icon className="text-primary" />
              {item.text}
            </div>
          ))}
        </div>
        {/* <p className=" absolute ri"></p> */}
        <div className="  rounded-xl overflow-hidden sm:w-1/2 w-full">
          <Image
            src={Img1}
            alt="img"
            loading="lazy"
            className="  sm:h-[60vh] h-[40vh]"
          />
        </div>
      </div>

      <div className="  relative  w-full  flex sm:flex-row flex-col  sm:mt-20 mt-10   gap-6 ">
        <div className="sm:w-1/2 w-full sm:absolute top-8 md:right-20 sm:right-10 py-6 sm:py-0  px-4 sm:px-6 lg:px-8 bg-white rounded-md sm:h-[56vh] min-h-[40vh] flex  flex-col justify-center gap-6">
          <h2 className="text-primary text-2xl">We Do with Creativity</h2>
          <p className="text-black/80">
            We are a results-driven digital solutions company specializing in
            SEO, Social Media Management, Professional Video Editing,
            Advertising Campaigns, Website Development, and VFX. Our mission is
            to help brands grow by enhancing their online presence, driving
            engagement, and delivering high-quality visual content. From
            boosting search rankings and managing social media to crafting
            stunning videos and running targeted ad campaigns, we provide
            end-to-end solutions tailored to your business needs. Whether you
            need a dynamic website, captivating visuals, or strategic marketing,
            we bring creativity and expertise together to take your brand to the
            next level. Let’s create, innovate, and grow together!
          </p>
        </div>
        {/* <p className=" absolute ri"></p> */}
        <div className="  rounded-xl overflow-hidden sm:w-1/2 w-full">
          <Image
            src={Img2}
            alt="img"
            className="  sm:h-[60vh] h-[40vh]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Creativity;
