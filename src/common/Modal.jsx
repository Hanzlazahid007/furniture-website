import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const Modal = ({ open, data }) => {
  const [itemAddes, setItemAdded] = useState(false);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  // const addToCart = (prod) => {
  //   let totalPrice = qty + prod.price;
  //   let tempProduct = {
  //     ...prod,
  //     quantity: qty,
  //     totalPrice,
  //   };
  //   alert(prod);
  //   dispatch(addToCart(tempProduct));
  //   setItemAdded(true);
  // };

  const addProductToCart = (prod) => {
    let totalPrice = qty * prod.price;
    let tempProduct = {
      ...prod,
      quantity: qty,
      totalPrice,
    };
    console.log(tempProduct); // Added for debugging
    dispatch(addToCart(tempProduct));
    setItemAdded(true);
  };

  // const increaseQuanity = (itemId, currentQty) => {
  //   const newQt = currentQty + 1;
  //   setQty(newQt);
  //   // dispatch(updateQty({ id: itemId, quantity: newQt }));
  // };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg max-w-3xl w-full flex">
          {/* Image Section */}
          <div className="w-1/5">
            <img
              src={data.img}
              alt="Product"
              className="w-full h-auto rounded"
            />
          </div>
          {/* Details Section */}
          <div className="w-4/5 pl-4">
            <h2 className="text-2xl mb-4">{data.short_description}</h2>
            <h2 className="text-2xl  text-red-600 mb-4">$ {data.price}</h2>
            <h2 className="text-sm mb-4">{data.description}</h2>

            <div className="flex items-center">
              <p className="font-semibold mr-2">Shades :</p>
              <select className="border border-gray-300 rounded-md p-2 focus: outline-none">
                <option value="option">CHoose an Option</option>
                <option value="option">CHoose an Option1</option>
                <option value="option">CHoose an Option2</option>
                <option value="option">CHoose an Option3</option>
                <option value="option">CHoose an Option4</option>
                <option value="option">CHoose an Option5</option>
              </select>
            </div>
            <p className="text-green-700 mt-2 mb-2">In Stock 400 Items</p>
            <div className="flex items-center">
              <div>
                <button
                  onClick={() => setQty(Math.floor(qty - 1), 1)}
                  className="py-3  px-6  border-2 mb-2"
                >
                  -
                </button>
                <span className="py-4  px-6  border-2 mb-2">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="py-3  px-6  border-2 mb-2"
                >
                  +
                </button>
              </div>
              {/* ================= */}

              {itemAddes ? (
                <Link to={"/cart"}>
                  <button className="py-3 bg-yellow-600  px-6  text-white border-2 mb-2">
                    View Cart{" "}
                  </button>
                </Link>
              ) : (
                <Link>
                  <button
                    onClick={() => addProductToCart(data)}
                    className="py-3 bg-yellow-600 text-white  px-6  border-2 mb-2"
                  >
                    Add to Cart{" "}
                  </button>
                </Link>
              )}

              {/* ================= */}
            </div>

            <button
              onClick={() => open(false)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
