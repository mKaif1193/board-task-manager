import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image
        src="/logo3r.png"
        alt="Board Logo"
        width={200}
        height={200}
        className="animate-pulse duration-700"
      />
    </div>
  );
};

export default Loading;
