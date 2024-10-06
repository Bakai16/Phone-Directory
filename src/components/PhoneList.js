import React from 'react';
import PhoneItem from './PhoneItem';

const PhoneList = ({ contacts, deleteContact, editContact }) => {
  return (
    <ul className="list-group mt-3">
      {contacts.map(contact => (
        <PhoneItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
          editContact={editContact}
        />
      ))}
    </ul>
  );
};

export default PhoneList;
