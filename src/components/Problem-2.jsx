import React, { useState } from 'react';

const Problem2 = () => {
  const [contacts, setContacts] = useState([]);

  const fetchAllContacts = async () => {
    try {
      const response = await fetch('https://contact.mediusware.com/api/contacts/');
      const data = await response.json();
      setContacts(data.results);
    } catch (error) {
      console.log('Error fetching contacts:', error);
    }
  };

  const fetchUSContacts = async () => {
    try {
      const response = await fetch('https://contact.mediusware.com/api/contacts/?country=United States');
      const data = await response.json();
      setContacts(data.results);
    } catch (error) {
      console.log('Error fetching US contacts:', error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-lg btn-outline-primary" type="button" onClick={fetchAllContacts}>
            All Contacts
          </button>
          <button className="btn btn-lg btn-outline-warning" type="button" onClick={fetchUSContacts}>
            US Contacts
          </button>
        </div>

        {/* Render the contacts */}
        <div className="mt-4">
          <h5>Contacts:</h5>
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>{contact.phone}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
