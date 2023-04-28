import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "components/Redux/contactsSlice.js";
import { filterReducer } from "components/Redux/filterSlice.js";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});