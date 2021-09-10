import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactsList/ContactListItem/ContactListItem';
import s from './ContactsLIst.module.css';

import { useSelector, useDispatch } from 'react-redux';

import operations from '../../redux/app/operations';
import appSelectors from '../../redux/app/contacts-selectors';

const ContactsList = () => {
  const contacts = useSelector(state => appSelectors.contactList(state));
  const filter = useSelector(state => appSelectors.contactFilter(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getContactOperation());
  }, [dispatch]);

  const onDeleteContact = contactId => {
    return dispatch(operations.deleteContactOperation(contactId));
  };

  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className={s.contacts}>
      <ul>
        {contacts.length > 0 &&
          visibleContacts.map(contact => {
            const { id, name, number } = contact;

            return (
              <ContactListItem
                key={id}
                contactName={name}
                contactNumber={number}
                onClickRemove={() => onDeleteContact(id)}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
