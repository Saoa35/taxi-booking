"use client";

import { useEffect, useState } from "react";

export const AutocompleteAddress = () => {
  const [source, setSource] = useState<any>();
  const [addressList, setAddressList] = useState<any>([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getAddressList();
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [source]);

  const getAddressList = async () => {
    const res = await fetch("/api/search-address?q=" + source, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = res.json();
    setAddressList(result);
  };

  return (
    <div className="mt-5">
      <div>
        <label className=" text-gray-400">Where From?</label>
        <input
          type="text"
          className="p-1 bg-white border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
          onChange={(e) => setSource(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <label className=" text-gray-400">Where To?</label>
        <input
          type="text"
          className="p-1 bg-white border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
          onChange={(e) => setSource(e.target.value)}
        />
      </div>
    </div>
  );
};
