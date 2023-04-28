import React from "react";

function TrackDetails() {
  return (
    <div>
      <div className="grid grid-cols-5 py-4 bg-[#f5f5f5] px-2">
        <span className="col-span-1 flex flex-col text-sm gap-2 justify-center">
          <span>03 April 2023</span>
          <span className="text-xs">11:28 am</span>
        </span>
        <span className="col-span-1 flex items-center">
          Alquoz Branch, United Arab Emirates
        </span>
        <span className="col-span-3 flex items-center">Shipment delivered</span>
      </div>
    </div>
  );
}

export default TrackDetails;
