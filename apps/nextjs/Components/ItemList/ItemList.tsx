import React from "react";

import dummyData from "../TestData/dummyData";

function ItemList() {
  return (
    <div className="flex flex-wrap">
      {dummyData.map((item) => (
        <div key={item.id} className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="mb-2 font-bold">{item.title}</h2>
              <p className="mb-2 text-sm">{item.description}</p>
              <p className="mb-2 text-gray-700">Phone: {item.phoneNumber}</p>
              <p className="mb-2 text-gray-700">Email: {item.email}</p>
              <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                Contact seller
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
