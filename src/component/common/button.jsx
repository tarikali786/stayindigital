import Link from "next/link";
import React from "react";

const ButtonCard = ({ title = "Contact Us", link = "#" }) => {
  return link ? (
    <Link
      href={link}
      className="bg-primary px-4 py-2  text-nowrap rounded text-white font-medium transition duration-300 hover:bg-opacity-80"
    >
      {title}
    </Link>
  ) : (
    <button className="bg-primary px-4  text-nowrap py-2 rounded text-white font-medium ">
      {title}
    </button>
  );
};

export default ButtonCard;
