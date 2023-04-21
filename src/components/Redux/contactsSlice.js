import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const contactsSlice = createSlice({
        name: "contacts",
        initialState:{contacts: []},
        reducers: {
                addContact(state,action) {
                        state.contacts.push(action.payload);
                },

                removeContact(state,action) {
                        state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
                },
        },
});

const persistConfig = {
        key: "root",
        storage,
};

export const contactsReducer = persistReducer(
        persistConfig,
        contactsSlice.reducer
);

export const {addContact, removeContact} = contactsSlice.actions;