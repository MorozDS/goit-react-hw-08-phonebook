import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectIsloading = state => state.contacts.contacts.isLoading;
export const selectFilter = state => state.contacts.filter;
export const selectError = state => state.contacts.contacts.error;

export const renderContactList = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return filter
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  }
);
