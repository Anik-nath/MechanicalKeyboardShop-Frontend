import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  price: number;
  brands: string[];
  sortByPrice: "asc" | "desc" | null;
  inStock: boolean;
  outOfStock: boolean;
}

const initialState: FilterState = {
  price: 0,
  brands: [],
  sortByPrice: null,
  inStock: false,
  outOfStock: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    resetPrice: (state) => {
      state.price = 0;
    },
    toggleBrand: (state, action: PayloadAction<string>) => {
      const brand = action.payload;
      if (state.brands.includes(brand)) {
        state.brands = state.brands.filter((item) => item !== brand);
      } else {
        state.brands.push(brand);
      }
    },
    setSortByPrice: (state, action: PayloadAction<"asc" | "desc" | null>) => {
      state.sortByPrice = action.payload;
    },
    toggleInStock: (state, action: PayloadAction<boolean>) => {
      state.inStock = action.payload;
    },
    toggleOutOfStock: (state, action: PayloadAction<boolean>) => {
      state.outOfStock = action.payload;
    },
    resetAllFilters: (state) => {
      state.price = 0;
      state.brands = [];
      state.sortByPrice = null;
    },
  },
});

export const {
  setPrice,
  resetPrice,
  toggleBrand,
  setSortByPrice,
  resetAllFilters,
  toggleInStock,
  toggleOutOfStock,
} = filterSlice.actions;
export default filterSlice.reducer;
