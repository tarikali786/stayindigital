"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Img from "../../../../public/team/ceo.jpg";
import Img2 from "../../../../public/team/mariyam.jpg";
import Img3 from "../../../../public/team/bdm.jpg";
import Img4 from "../../../../public/team/seo-male.jpg";

const TeamData = [
  {
    img: Img,
    name: "Hammad Aathif",
    role: "CEO",
  },
  {
    img: Img2,
    name: "Mariam",
    role: "HR",
  },
  {
    img: Img3,
    name: "Kowsalya",
    role: "Business Head",
  },
  {
    img: Img4,
    name: "Mohamed Kamil",
    role: "Digital Marketing Expert",
  },
];

const Team = () => {
  return (
    <section className="py-20 text-white">
      <div className="common-padding mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="md:text-xl text-lg font-bold my-3 text-white">
            Team Expert
          </h3>
          <h2 className="md:text-3xl text-2xl font-bold my-3 text-primary">
            Meet Our Team
          </h2>
        </motion.div>

        {/* Team Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-10 md:gap-6 gap-4"
        >
          {TeamData.map((team, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
              }}
              className="w-full bg-blue-700  border border-gray-800 rounded-lg flex flex-col items-center hover:border-primary hover:shadow-md transition-all duration-300"
            >
              <div className="relative w-full h-[40vh] rounded-md overflow-hidden  shadow-lg">
                <Image
                  src={team.img}
                  alt={team.name}
                  fill
                  className="object-fill "
                  loading="lazy"
                />
              </div>
              <h4 className="text-center font-bold mt-4 text-white">
                {team.name}
              </h4>
              <p className="text-sm text-gray-300  mt-2 pb-4">{team.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
