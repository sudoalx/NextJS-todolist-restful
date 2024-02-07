"use client";

import { useState } from "react";

// https://tailwindcomponents.com/component/radio-buttons-1

interface TabBarProps {
  currentTab?: number;
  tabOptions?: string[];
}

export const TabBar = ({
  tabOptions = ["1", "2", "3", "4"],
  currentTab = 1,
}: TabBarProps) => {
  const [selected, setSelected] = useState(currentTab);

  const onTabSelected = (tab: number) => {
    setSelected(tab);
  };

  return (
    <div
      className={`grid w-full grid-cols-4 space-x-2 rounded-xl bg-gray-700 p-2
    grid-cols-${tabOptions.length}
    `}
    >
      {tabOptions.map((tab) => (
        <div key={tab}>
          <input
            checked={selected === parseInt(tab)}
            type="radio"
            id={tab}
            onChange={() => onTabSelected(parseInt(tab))}
            className="peer hidden"
            name="tabs"
          />
          <label
            onClick={() => onTabSelected(parseInt(tab))}
            htmlFor={tab}
            className="transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white transition-all peer-checked:shadow-lg hover:bg-blue-500 hover:font-bold hover:text-white hover:shadow-lg"
          >
            {tab}
          </label>
        </div>
      ))}
    </div>
  );
};
