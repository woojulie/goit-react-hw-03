import React from "react";
import Contact from "./Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
