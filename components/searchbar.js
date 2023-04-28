import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { FypContext } from "../context/context";
import OrdersComponent from "./OrdersComponent";

function Searchbar() {
  const { baseUrl, accessToken } = useContext(FypContext);
  const [localAccessToken, setLocalAccessToken] = useState("");
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    const storedState = localStorage.getItem("Access Token");
    if (storedState) {
      setLocalAccessToken(storedState);
      getOrders(storedState);
    }
    console.log(`Access Token: ${accessToken}`);
    console.log(`Local Token: ${localAccessToken}`);
  }, []);

  const getOrders = async (accessToken) => {
    try {
      const url = baseUrl + "orders";

      const ordersReq = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const ordersRes = await ordersReq.json();
      setOrderDetails(ordersRes);
      console.log(ordersRes);
    } catch (error) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  };

  return (
    <div className="border rounded-2xl ">
      <div className="m-8">
        <div className="flex flex-row justify-start pb-8 py-8">
          <button className="border-b-violet-600">
            <Link href="/trackingpage" className="px-5">
              Track
            </Link>
          </button>
          <button className="">
            <a href="#" className="px-5">
              Ship
            </a>
          </button>
          <button className="">
            <a href="#" className="px-5">
              Billing
            </a>
          </button>
        </div>
        <form className="flex items-center">
          <label for="simple-search" class="sr-only">
            Type your tracking number
          </label>
          <div className="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
          <button
            type="submit"
            class="p-2.5 ml-2 text-sm font-medium text-white bg-purple-700 rounded-lg border border-purple-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-600 dark:hover:bg-violet-700 dark:focus:ring-purple-800"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </form>
        <div className="pt-3">
          <p>
            Need help changing your delivery?{" "}
            <span>
              <Link href="#">Get Help</Link>
            </span>
          </p>
        </div>
      </div>
      {orderDetails &&
        orderDetails?.map((orders) => {
          return <OrdersComponent {...orders} />;
        })}
    </div>
  );
}

export default Searchbar;
