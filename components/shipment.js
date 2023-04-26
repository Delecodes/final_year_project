import Link from "next/link";
import React from "react";

export default function Shipment() {
  return (
    <>
      <div className="py-2 drop-shadow">
        <div className="m-16  box-border border-stone-200 rounded-2xl">
          <div className="bg-white">
            <div className="inner-container px-4 pt-4 flex">
              <div className="lhs flex gap-9 w-full">
                <div className="shipment-details pb-2 flex flex-col gap-2 ">
                  <h4 className="text-lg  text-violet-600">Shipment Number:</h4>
                  <h2 className="">7627277483</h2>
                  <div className="">
                    <p className="">
                      wygrifoywueqkjwbdbqdbwjbkjkbwqbjdwfoiuwegfiue
                      <br />
                      gafougwpeuqmwdjqjhfgjnwdjnwqjnjwui9wgefo9goweuie
                    </p>
                  </div>
                  <div className="w-full flex  rounded-full items-center h-2.5 gap-2 dark:bg-gray-700">
                    <div class="bg-violet-600 w-[80%]  h-2.5 rounded-full"></div>{" "}
                    <p className="text-violet-700">Delivered</p>
                  </div>
                </div>
                <div className="update ">
                  <p>Last update is</p>
                  <p>shipment delivered</p>
                  <p className="text-[#8D8D8D] text-[12px]">
                    03 April 2023 11:28 AM
                  </p>
                </div>
              </div>
              <div className="rhs w-[20%] flex justify-end align-middle">
                <p className="flex items-center text-violet-600 text-[14px]">
                  Hide History
                </p>
              </div>
            </div>
          </div>

          <section className="my-8">
            <div className="grid grid-cols-5 px-2 py-4 bg-[#fff]">
              <span className="col-span-1">Date</span>
              <span className="col-span-1">Location</span>
              <span className="col-span-3">Update</span>
            </div>

            <div className="grid grid-cols-5 py-4 bg-[#f5f5f5] px-2">
              <span className="col-span-1 flex flex-col text-sm gap-2 justify-center">
                <span>03 April 2023</span>
                <span className="text-xs">11:28 am</span>
              </span>
              <span className="col-span-1 flex items-center">
                Alquoz Branch, United Arab Emirates
              </span>
              <span className="col-span-3 flex items-center">
                Shipment delivered
              </span>
            </div>

            <div className="grid grid-cols-5 py-4 bg-[#fff] px-2">
              <span className="col-span-1 flex flex-col text-sm gap-2 justify-center">
                <span>03 April 2023</span>
                <span className="text-xs">9:28 am</span>
              </span>
              <span className="col-span-1 flex items-center">
                Alquoz Branch, United Arab Emirates
              </span>
              <span className="col-span-3 flex items-center">
                Shipment is out for delivery
              </span>
            </div>

            <div className="grid grid-cols-5 py-4 bg-[#f5f5f5] px-2">
              <span className="col-span-1 flex flex-col text-sm gap-2 justify-center">
                <span>02 April 2023</span>
                <span className="text-xs">4:50 am</span>
              </span>
              <span className="col-span-1 flex items-center">
                Alquoz Branch, United Arab Emirates
              </span>
              <span className="col-span-3 flex items-center">
                Shipment has reached Aramex office at destination - Shipment
                will be prepared for customer pickup/delivery
              </span>
            </div>
          </section>
        </div>
        <div className="m-16 border rounded-2xl">
          <div className="bg-gray-100 p-8">
            <h1 className="text-2xl">Shipment Details</h1>
          </div>
          <div className="bg-white flex p-12 justify-between">
            <div className="flex justify-between w-[30%] items-center">
              <span className="flex flex-col gap-2 items-center">
                <span className="text-sm">Origin</span>
                <span className="font-bold">United Arab Emirates</span>
              </span>
              <span className="flex flex-col gap-3=2 items-center">
                <span className="text-sm">Destination</span>
                <span className="font-bold">United Arab Emirates</span>
              </span>
            </div>
            <span>Get Notifications</span>
          </div>
        </div>
      </div>
    </>
  );
}
