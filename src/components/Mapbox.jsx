import React from "react";

const Mapbox = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849.3367170878846!2d-8.004560681687618!3d31.624351853949207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafeef591e81187%3A0x5370e8aa4b3c1515!2sLe%20Palace!5e0!3m2!1sfr!2sma!4v1739352921203!5m2!1sfr!2sma"
        height="500"
        style={{ border: 0, width: "100%" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Mapbox;
