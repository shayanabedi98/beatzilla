"use client";

import FilterItem from "./FilterItem";

type Props = {
  handleFilter: (str: string) => void;
  isActive: {
    all: boolean;
    pop: boolean;
    edm: boolean;
    hipHop: boolean;
    [key: string]: boolean;
  };
};

export default function Filter({ handleFilter, isActive }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <FilterItem
        title="All"
        genre="all"
        isActive={isActive}
        handleClick={handleFilter}
      />
      <FilterItem
        title="Pop"
        genre="pop"
        isActive={isActive}
        handleClick={handleFilter}
      />
      <FilterItem
        title="EDM"
        genre="edm"
        isActive={isActive}
        handleClick={handleFilter}
      />
      <FilterItem
        title="Hip Hop"
        genre="hipHop"
        isActive={isActive}
        handleClick={handleFilter}
      />
    </div>
  );
}
