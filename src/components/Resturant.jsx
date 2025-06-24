"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Slides from "./Slides";

const Resturant = () => {
  const { t } = useTranslation();

  return (
    <div
      id="restaurant"
      className="w-full h-full md:h-screen flex md:flex-row-reverse flex-col justify-center items-center px-3 pb-8 gap-3"
    >
      <div className="w-full">
        {/* swiper */}
        <Slides />
      </div>
      <div className=" w-full">
        <div className="w-full h-full flex flex-col justify-center items-start gap-3 lg:p-20 p-2 mt-2 text-primary">
          <p className="text-[14px] font-light lg:font-normal text-justify tracking-wider leading-[28px] px-2 2xl:px-12">
            {t("about.content_1")}
          </p>
          <p className="text-[14px] font-light lg:font-normal text-justify tracking-wider leading-[28px] px-2 2xl:px-12 ">
            {t("about.content_2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resturant;
