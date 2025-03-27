"use client";

import { motion } from "framer-motion";
import Img1 from "../../../../public/4I.jpg";
import ImageComponent from "@/component/common/ImageComponent";
const Posuere = () => {
  return (
    <section className="py-16 common-padding   text-white   flex flex-col md:flex-row gap-6  items-start  overflow-hidden w-full ">
      {/* Floating Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className=" bg-white md:w-[40%] w-full global-bg p-8  md:mt-0 mt-6 rounded-lg shadow-lg "
      >
        <h2 className="text-2xl md:text-3xl mb-6 ">
          Nam Posuere Placerat Finibus
        </h2>
        <p className=" text-gray-300">
          Morbi ornare velit vitae felis commodo, at blandit est vestibulum.
          Mauris quam arcu, facilisis ut vestibulum sit amet, pellentesque in
          metus. Aenean pharetra mauris ac sem faucibus, consectetur ullamcorper
          ex fermentum. Mauris placerat scelerisque pulvinar.Etiam accumsan
          justo ut justo elementum rhoncus. Morbi ullamcorper pharetra ligula,
          eget vehicula nunc dignissim hendrerit. In dignissim sodales arcu ac
          mattis. Etiam ut ante ut nunc gravida facilisis congue et eros. Nam
          posuere !
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative md:w-1/2"
      >
        <ImageComponent
          src={Img1}
          alt="Trust Image"
          cardCss=" w-full md:h-[50vh] "
        />
      </motion.div>
    </section>
  );
};

export default Posuere;
