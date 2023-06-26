import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useFilter from "../../hooks/useFilter";

const Filters = () => {
  const { filters, activeFilter, setActiveFilter, updateFiltersList } =
    useFilter();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    const filtersList = [...new Set(items?.map((item) => item.colour))];
    updateFiltersList(filtersList);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <FormControl
      sx={{ width: "20%", marginBottom: (theme) => theme.spacing(5) }}
    >
      <InputLabel>Filters</InputLabel>
      <Select
        label="Filters"
        value={activeFilter}
        onChange={(e) => {
          setActiveFilter(e.target.value);
        }}
      >
        <MenuItem value="">Clear Filter</MenuItem>
        {filters.length &&
          filters.map((filter) => (
            <MenuItem value={filter} key={filter}>
              {filter}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default Filters;
