import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './reducers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact,
    deleteContact,
    filterContact,
  },
});
console.log(contactsSlice.actions);

export const {
  addContact: addNewContacts,
  deleteContact: deleteIdContact,
  filterContact: filterContacts,
} = contactsSlice.actions;
export const rootReducer = contactsSlice.reducer;
