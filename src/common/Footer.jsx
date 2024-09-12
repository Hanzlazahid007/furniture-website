import React from "react";
import { footer } from "../data/Data";
const Footer = () => {
  return (
    <div className=" bg-gray-900 mt-80">
      <div className="m-auto w-10/12">
        <div className="flex items-center py-14 gap-8 justify-around  bg-gray-900">
          {footer.map((item, index) => {
            return (
              <div className="text-gray-300 " key={index}>
                <h1 className="text-2xl mb-2 text-white">{item.header}</h1>
                <p>{item.content1}</p>
                <p>{item.content2}</p>
                <p>{item.content3}</p>
                <p>{item.content4}</p>
                <p>{item.content5}</p>
                <p>{item.content6}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
