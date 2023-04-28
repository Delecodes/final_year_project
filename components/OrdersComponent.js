import React from "react";
import moment from "moment";
import Link from "next/link";

function OrdersComponent({ date, description, status, tracking_id }) {
  return (
    <div>
      <Link href={`/${tracking_id}`}>
        <div className="p-3 flex items-center justify-between border border-gray-100 pr-5 pl-5">
          <div className="flex items-center justify-between w-[50%]">
            <p>{status}</p>
            <p className="text-center">{description}</p>
          </div>
          <div>
            <p>{moment(date).format("LLLL")}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default OrdersComponent;
