"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaMailBulk,
} from "react-icons/fa";
import i18next from "../../i18n";

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  const changeLanguage = (lang) => {
    localStorage.removeItem("lang");
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    i18next.changeLanguage(i18next.language);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    isClient && (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center md:items-start bg-primary py-10">
          <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-background px-10 py-3 text-sm lg:text-base">
            <span className="uppercase tracking-widest">Reservations</span>
            <Link
              href="/booking"
              className="uppercase border border-background px-3 py-1 hover:bg-secondary hover:border-secondary hover:text-primary transition-all ease-linear"
            >
              Book a table
            </Link>
            <span className="uppercase tracking-widest pt-1">
              Opening Hours
            </span>
            <span className="text-center">Every Day: 07:00PM - 02:00AM</span>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-background px-10 py-3 text-sm lg:text-base">
            <span className="uppercase font-semibold tracking-widest">
              Location
            </span>
            <span className="text-center">
              Av. Echouhada Rue Ahmed Chawqui Hivernage1
            </span>
            <span className="uppercase font-semibold tracking-widest pt-1">
              Phone
            </span>
            <Link
              href="http://wa.me/212675480101"
              className="text-center cursor-pointer"
            >
              +212 675-480101
            </Link>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-background px-10 py-3 text-sm lg:text-base">
            <span className="uppercase font-semibold tracking-widest">
              Email
            </span>
            <span className="text-center">
              reservation@le-palacemarrakech.com
            </span>
            <span className="uppercase font-semibold tracking-widest pt-1">
              Social
            </span>
            <div className="w-full flex justify-center items-center gap-2">
              <Link href="http://wa.me/212675480101" target="_blank">
                <FaWhatsappSquare size={25} />
              </Link>
              <Link
                href="https://www.instagram.com/lepalacemarrakech"
                target="_blank"
              >
                <FaInstagramSquare size={25} />
              </Link>
              <Link
                href="mailto:reservation@le-palacemarrakech.com"
                target="_blank"
              >
                <FaMailBulk size={25} />
              </Link>
            </div>
            {/* Language */}
            <div className="w-full flex justify-center items-center gap-4 px-3 py-4">
              <div
                className="cursor-pointer"
                onClick={() => changeLanguage("en")}
              >
                <Image
                  src="/english.png"
                  alt="le palace"
                  width={500}
                  height={500}
                  priority
                  className="w-7 h-7"
                />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => changeLanguage("fr")}
              >
                <Image
                  src="/france.png"
                  alt="le palace"
                  width={500}
                  height={500}
                  priority
                  className="w-7 h-7"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full text-center py-2 bg-secondary text-primary text-sm">
          © 2025 Le Palace. All Right Reserved
        </div>
      </div>
    )
  );
};

export default Footer;
