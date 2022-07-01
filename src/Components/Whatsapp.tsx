import React from "react";
import Image from "next/image";
const Whatsapp = () => {
  return (
    <div className="whatsapp">
      <a
        href="https://api.whatsapp.com/send?phone=919596070720&text=Hello%20KashmirEnsueno"
        className="logo"
        target="_blank"
      >
        <Image
          src={`/assets/images/whatsapp.svg`}
          width={65}
          height={65}
          alt="whatsapp"
        />
      </a>
    </div>
  );
};

export default Whatsapp;
