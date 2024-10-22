import React from "react";

const Contact = ({ contact, onDelete }) => {
  return (
    <div>
      <li>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
        <button onClick={() => onDelete(contact.id)}>Delete</button>
      </li>
    </div>
  );
};

export default Contact;
