import React from "react";
import Image from "next/image";
const Whatsapp = () => {
  return (
    <div className="whatsapp">
      <a
        href="https://api.whatsapp.com/send?phone=916005702825&text=Hello%20KashmirEnsueno"
        className="logo"
        target="_blank"
      >
        <Image
          src="https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1658333406/WhatsApp_ls56pn.svg"
          width={65}
          height={65}
          alt="whatsapp"
        />
      </a>
    </div>
  );
};

export default Whatsapp;
