import React from "react";
import { category } from "../data/Data";

const Category = () => {
  return (
    <div>
      <div className="w-10/12 m-auto">
        <div className="flex">
          {category.map((item, index) => {
            return (
              <div className="m-2" key={index}>
                <div>
                  {item.img && (
                    <div
                      key={index}
                      className="relative rounded-3xl overflow-hidden"
                    >
                      <img
                        className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all ease-in-out duration-600"
                        src={item.img}
                        alt={item.name}
                      />
                      <p className="absolute rounded-full text-xl capitilize bg-white border-white p-3 bottom-0 left-2">
                        {item.name}
                      </p>
                    </div>
                  )}
                  <div>
                    {item.imgs && (
                      <div className="relative rounded-3xl overflow-hidden">
                        {item.imgs.map((image, index) => {
                          return (
                            <div
                              className="relative mt-2 mb-2 rounded-3xl overflow-hidden"
                              key={index}
                            >
                              <img
                                className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all ease-in-out duration-600"
                                src={image.img}
                              />
                              <p className="absolute rounded-full text-xl capitilize bg-white border-white p-3 bottom-0 left-2">
                                {image.name}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
