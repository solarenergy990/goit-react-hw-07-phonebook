import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';

// import { connect } from 'react-redux'
// import { useSelector, useDispatch } from 'react-redux';
// import appActions from '../../redux/app/actions';
// import operations from '../../redux/app/operations';

const App = () => {
  // const contacts = useSelector(state => {
  //   // console.log('contacts', state.appState.contacts);
  //   return state.appState.contacts.items;
  // });
  // const filter = useSelector(state => {
  //   // console.log('filter', state.appState.filter);
  //   return state.appState.filter;
  // });
  // const dispatch = useDispatch();

  // const onHandleSubmit = contact =>
  //   dispatch(operations.postContactOperation(contact));
  // const onDeleteContact = contactId =>
  //   dispatch(operations.deleteContactOperation(contactId));
  // const onChangeFilter = value => dispatch(appActions.setFilter(value));

  // useEffect(() => {
  //   dispatch(operations.getContactOperation());
  // }, [dispatch]);

  // const getVisibleContacts = (contacts, filter) => {
  //   console.log('get visible', contacts);
  //   if (!filter) {
  //     return contacts;
  //   }

  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />

      <ContactsList />
    </div>
  );
};

export default App;
