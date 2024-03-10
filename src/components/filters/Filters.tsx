import React, { ChangeEvent } from "react";
import "./filters.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addFilter } from "../../redux/slices/filtersSlice";

type FilterName = "searchQuery" | "veg" | "spicy" | "sort";

export const Filters = () => {
  const filters = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const { searchQuery, sort, spicy, veg } = filters;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "searchQuery" || name === "sort") {
      dispatch(addFilter({ filterName: name, value }));
    } else {
      dispatch(addFilter({ filterName: name as FilterName, value: null }));
    }
  };

  return (
    <div className="filters_container">
      <p>Filters: </p>
      <input
        onChange={handleChange}
        value={searchQuery}
        type="text"
        placeholder="search by name"
        name="searchQuery"
      />
      <div className="filter">
        <input
          onChange={handleChange}
          checked={!!veg}
          type="checkbox"
          name="veg"
          id="veg"
        />
        <label htmlFor="veg">Veg</label>
      </div>
      <div className="filter">
        <input
          onChange={handleChange}
          type="checkbox"
          name="spicy"
          id="spicy"
          checked={spicy}
        />
        <label htmlFor="spicy">Spicy</label>
      </div>
      <div className="filter">
        <input
          onChange={handleChange}
          type="radio"
          name="sort"
          id="lowToHigh"
          value="lowToHigh"
          checked={Boolean(sort === "lowToHigh")}
        />
        <label htmlFor="lowToHigh">Low to high</label>
      </div>
      <div className="filter">
        <input
          onChange={handleChange}
          type="radio"
          name="sort"
          id="highToLow"
          value="highToLow"
          checked={Boolean(sort === "highToLow")}
        />
        <label htmlFor="highToLow">High to low</label>
      </div>
    </div>
  );
};
