import React, { useState } from "react";
import { products } from "../data/Data";
import { IoMdSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import Heading from "../common/Heading";
import Modal from "../common/Modal";

const FlashSale = () => {
  const [prodOpen, setProdOpen] = useState(false);
  const [product, setProduct] = useState({});

  const productOpen = (id) => {
    alert(id);
    const product = products.find((item) => item.id === id);
    setProdOpen(true);
    setProduct(product);
  };
  return (
    <div>
      <div className="w-10/12 m-auto mb-10 ">
        <Heading heading={"You are in Kitchen"} />
        <div className="grid grid-cols-4 gap-4  ">
          {products.map((item, index) => {
            return (
              <div key={index} className="relative   ">
                <div key={index}>
                  <img className="rounded-3xl" src={item.img} />
                </div>
                <div>
                  <p> {item.title}</p>
                  <p> {item.price}</p>
                </div>
                <div className={"opacity-1 absolute text-2xl   right-0 top-0"}>
                  <div className=" bg-white rounded-full p-2">
                    <IoMdSearch />
                  </div>
                  <div className=" bg-white rounded-full p-2">
                    <IoMdHeartEmpty />
                  </div>
                </div>
                <div
                  className={
                    "  absolute bottom-0 right-0   text-3xl bg-black text-white rounded-full w-12 h-12 flex  justify-center opacity-1 "
                  }
                >
                  <MdShoppingCart
                    onClick={() => productOpen(item.id)}
                    className="mt-2 "
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {prodOpen && <Modal data={product} open={setProdOpen} />}
    </div>
  );
};

export default FlashSale;
