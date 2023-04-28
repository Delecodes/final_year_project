import Link from "next/link";
import React from "react";
import moment from "moment";
import TrackDetails from "./TrackDetails";

export default function Tracking({
  tracking_id,
  description,
  date,
  status,
  order_history,
}) {
  return (
    <>
      <div className="py-2 drop-shadow">
        <div className="m-16  box-border border-stone-200 rounded-2xl">
          <div className="bg-white">
            <div className="inner-container px-4 pt-4 flex">
              <div className="lhs flex gap-9 w-full">
                <div className="shipment-details pb-2 flex flex-col gap-2 ">
                  <h4 className="text-lg  text-violet-600">Shipment Number:</h4>
                  <h2 className="">{tracking_id}</h2>
                  <div className="">
                    <p className="text-[24px] font-bold pb-2 pt-2">
                      {description}
                    </p>
                  </div>
                  <div className="w-full flex  rounded-full items-center h-2.5 gap-2 dark:bg-gray-700">
                    <div class="bg-violet-600 w-[80%]  h-2.5 rounded-full"></div>{" "}
                    <p className="text-violet-700">{status}</p>
                  </div>
                </div>
                <div className="update ">
                  <p>Last update is</p>
                  <p>shipment {status}</p>
                  <p className="text-[#8D8D8D] text-[12px]">
                    {moment(date).format("DD-MM-YYYY hh:mm")}
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

            {order_history &&
              order_history.map((history, index) => {
                return <TrackDetails key={index} {...history} />;
              })}
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
            {/* <span>Get Notifications</span> */}
          </div>
        </div>
      </div>
    </>
  );
}
