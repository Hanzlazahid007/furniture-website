import React from "react";
import PageHeading from "../common/PageHeading";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, getCartTotal } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Cart = () => {
  const { data, totalAmount } = useSelector((state) => state.cart);
  console.log(data);
  const dispatch = useDispatch();

  const removeItems = (id) => {
    alert(id);
    dispatch(removeItem({ id: id }));
    dispatch(getCartTotal());
    console.log(totalAmount);
  };

  return (
    <div>
      <div>
        <PageHeading home={"home"} pagename={"cart"} />
      </div>

      <div className="w-10/12 m-auto">
        <div className="mt-8">
          <table className="w-full shadow-xl rounded-2xl ">
            <thead className="bg-blue-900 text-white px-4 py-2 text-center">
              <tr>
                <th className="text-center px-4 py-2"></th>
                <th className="text-center px-4 py-2">Product</th>
                <th className="text-center px-4 py-2">Price</th>
                <th className="text-center px-4 py-2">Quantity</th>
                <th className="text-center px-4 py-2">Sub Total </th>
                <th className="text-center px-4 py-2">Product</th>
              </tr>
            </thead>
            <tbody>
              {data.map((dat, index) => {
                return (
                  <tr key={index}>
                    <td className="text-center px-4 py-2 items-center">
                      {" "}
                      <span onClick={() => removeItems(dat.id)}>
                        <FaTimes />
                      </span>
                    </td>
                    <td className="text-center px-4 py-2 items-center">
                      <div className="flex text-center items-center">
                        <div>
                          <img
                            className="h-40 w-40 object-cover mr-2"
                            src={dat.img}
                            alt="img "
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{dat.title}</p>
                        </div>
                      </div>
                    </td>
                    <td>{dat.price}</td>
                    <td className="text-center px-4 py-2 items-center">
                      <div>
                        {/* <button
                          onClick={() => setQty(Math.floor(qty - 1), 1)}
                          className="py-3  px-6  border-2 mb-2"
                        >
                          -
                        </button> */}
                        <span className="py-4  px-6  border-2 mb-2">
                          {dat.quantity}
                        </span>
                        {/* <button
                          onClick={() => setQty(qty + 1)}
                          className="py-3  px-6  border-2 mb-2"
                        >
                          +
                        </button> */}
                      </div>
                    </td>
                    <td className="text-center px-4 py-2 items-center">
                      {dat.price}
                    </td>
                    <td className="text-center px-4 py-2 items-center">
                      {dat.quantity}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* ==================== */}
        <div className="p-6 w-2/5 bg-white shadow-2xl mt-4 mb-10 rounded-2xl">
          <h1 className=" mb-4 text-center text-3xl">Cart Total </h1>
          <h1 className="flex justify-between mt-3">
            Sub Total : <span>${totalAmount} </span>
          </h1>
          <div className="flex justify-between mt-3">
            Shipping Charges : <spann>${10}</spann>
          </div>
          <div className="flex justify-between mt-3">
            Grand Total : <spann>${totalAmount + 10}</spann>
          </div>
          <div className="flex items-center whitespace-nowrap justify-between mt-4">
            <div className=" py-2 common-hover rounded-lg text-white px-4 ">
              <div>Proccees to checkout</div>
            </div>
            <div>
              <div className="  py-2  rounded-lg text-white px-4 common-hover bg-rose-500">
                <Link to={"/shop"}>Continue Shopping</Link>
              </div>
            </div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
