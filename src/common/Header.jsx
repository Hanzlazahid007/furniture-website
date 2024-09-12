import React, { useState } from "react";
import { navbar } from "../data/Data";
import { Link } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
import { TiUserOutline } from "react-icons/ti";
import { AiOutlineShopping } from "react-icons/ai";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const {
    data: cartProducts,
    totalAmount,
    totalItem,
  } = useSelector((state) => state.cart);

  const toogleSide = () => {
    // alert();
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <>
      <div>
        <div className="flex sticky box p-4 items-center bg-white justify-around shadow-xl ">
          <div>
            <h1 className="font-bold text-[35px]"> Furnitiure</h1>
          </div>
          <div className="md: flex text-base  gap-5">
            {navbar.map((item, index) => {
              return (
                <div key={index}>
                  <Link
                    className="transition-all hover:text-orange-300 active:text-orange-300 "
                    to={item.path}
                    key={index}
                  >
                    {item.nav}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            <Link className="text-3xl">
              <IoHeartOutline />
            </Link>
            <Link className="text-3xl">
              <TiUserOutline />
            </Link>

            <Link className="relative text-3xl" onClick={toogleSide}>
              <AiOutlineShopping />

              <div className="items_count">
                <span className="text-white"> {totalItem}</span>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <SideBar toggle={toggle} close={() => toogleSide()} />
        </div>
      </div>
    </>
  );
};

export default Header;
