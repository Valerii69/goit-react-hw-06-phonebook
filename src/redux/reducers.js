import { useReducer } from "react";

export const addContact = (state, { payload }) => {
  state.contacts.push(payload);
};

export const deleteContact = (state, { payload }) => {
  state.contacts = state.contacts.filter(contact => contact.id !== payload);
};

export const filterContact = (state, { payload }) => {
  state.filter = payload;
};

