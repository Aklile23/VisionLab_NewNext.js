"use client";

import Image from "next/image";

const NewsLatterBox = () => {
  return (
    <div className="flex items-center justify-center w-[full] h-full bg-black2 ">
      <Image
        src="/images/gif/contact.gif" // Path to your .gif file
        alt="Contact animation"
        width={400}
        height={400}
        className="object-contain rounded-lg"
      />
    </div>
  );
};

export default NewsLatterBox;
