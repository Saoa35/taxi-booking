"use client";

import { useState } from "react";

export const AutocompleteAddress = () => {
  const [source, setSource] = useState<any>();

  const getAddress = async () => {
    const res = fetch("/api/search-address?q=" + source);
  };

  return (
    <div className="mt-5">
      <div>
        <label className=" text-gray-400">Where From?</label>
        <input
          type="text"
          className="p-1 bg-white border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
        />
      </div>

      <div className="mt-3">
        <label className=" text-gray-400">Where To?</label>
        <input
          type="text"
          className="p-1 bg-white border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
        />
      </div>
    </div>
  );
};
