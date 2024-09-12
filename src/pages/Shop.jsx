import React, { useState } from "react";
import { category, products } from "../data/Data";
import { IoMdSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";

import Modal from "../common/Modal";
import PageHeading from "../common/PageHeading";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { BsFilterSquare } from "react-icons/bs";

const Shop = () => {
  const [prodOpen, setProdOpen] = useState(false);
  const [product, setProduct] = useState({});
  const [filters, setFilter] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 1500],
  });

  const categoryList = Array.from(
    new Set(products.map((item, index) => item.category))
  );
  const brandList = Array.from(
    new Set(products.map((item, index) => item.brand))
  );

  const filterProduct = products.filter((item) => {
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(item.category)
    )
      return false;

    if (filters.brands.length > 0 && !filters.brands.includes(item.brand))
      return false;

    const price = parseFloat(item.price);

    if (price < filters.priceRange[0] || price > filters.priceRange[1])
      return false;

    return true;
  });
  console.log("asasa", filterProduct);
  const handlePriceChange = (val) => {
    setFilter({ ...filters, priceRange: val });
  };

  const handleCheckboxChange = (filterType, value) => {
    const updatedFilters = [...filters[filterType]];
    const index = updatedFilters.indexOf(value);
    console.log("index of filter", index);
    if (index === -1) {
      updatedFilters.push(value);
      console.log("updated filters", updatedFilters);
    } else {
      updatedFilters.splice(index, 1);
    }
    setFilter({ ...filters, [filterType]: updatedFilters });
    console.log("filters", filters);
  };

  const productOpen = (id) => {
    alert(id);
    const product = products.find((item) => item.id === id);
    setProdOpen(true);
    setProduct(product);
  };
  return (
    <div className="mt-10 ">
      <div>
        <PageHeading home={"home"} pagename={"Shop"} />
      </div>

      <div className=" ml-[4.5rem]  mt-[2rem]  ">
        <div className="filterproduct w-1/4  bg-white shadow-lg p-4">
          <div>
            <div className="my-4">
              <h1 className="text-4xl font-semibold">Filters</h1>
            </div>
            {/* ========================== */}
            <div className="my-4">
              <h1 className="text-4xl font-semibold">Price</h1>

              <div>
                <Slider
                  min={0}
                  max={1500}
                  range
                  defaultValue={filters.priceRange}
                  onChange={handlePriceChange}
                />
                <div className="flex justify-between">
                  <span>Min Price : ${filters.priceRange[0]}</span>
                  <span>Max Price : ${filters.priceRange[1]}</span>
                </div>
              </div>
            </div>
            {/* ==================== */}

            <div className="my-4">
              {/* <h1 className="text-4xl font-semibold">Price</h1> */}

              <div className="my-4">
                <h1 className="text-4xl font-semibold">By Category</h1>
              </div>

              <div>
                {categoryList.map((cate, key) => {
                  return (
                    <div className="flex items-center gap-2" key={key}>
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(cate)}
                        onChange={() =>
                          handleCheckboxChange("categories", cate)
                        }
                      />
                      <div>{cate}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* ================================ */}
            <div className="my-4">
              {/* <h1 className="text-4xl font-semibold">Price</h1> */}

              <div className="my-4">
                <h1 className="text-4xl font-semibold">By Brands</h1>
              </div>

              <div>
                {brandList.map((brand, key) => {
                  return (
                    <div className="flex items-center gap-2" key={key}>
                      <input
                        type="checkbox"
                        checked={filters.brands.includes(brand)}
                        onChange={() => handleCheckboxChange("brands", brand)}
                      />
                      <div>{brand}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* ============================= */}
          </div>
        </div>
      </div>
      <div className=" w-10/12 ml-20 mt-24 m-auto mb-10 ">
        <div className="ml-72 mt-[-40rem]  grid grid-cols-3 gap-4  ">
          {filterProduct.map((item, index) => {
            return (
              <div key={index} className="relative  ">
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
                  <div className="bg-white rounded-full p-2">
                    <IoMdHeartEmpty />
                  </div>
                </div>
                <div
                  className={
                    " absolute bottom-0 right-0   text-3xl bg-black text-white rounded-full w-12 h-12 flex  justify-center opacity-1  "
                  }
                >
                  <MdShoppingCart
                    onClick={() => productOpen(item.id)}
                    className="mt-2"
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

export default Shop;
