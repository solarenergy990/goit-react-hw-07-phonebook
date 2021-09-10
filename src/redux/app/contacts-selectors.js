const contactList = state => state.appState.contacts.items;
const contactFilter = state => state.appState.filter;
const contactLoad = state => state.appState.contacts.isLoading;
const contactError = state => state.appState.contacts.error;

const appSelectors = {
  contactList,
  contactFilter,
  contactLoad,
  contactError,
};

export default appSelectors;
