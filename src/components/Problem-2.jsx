import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Contact from "../services/contact";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Problem2 = () => {
  const [allContactsModalIsOpen, setAllContactsModalIsOpen] = useState(false);
  const [usContactsModalIsOpen, setUSContactsModalIsOpen] = useState(false);
  const [contactList, setContactList] = useState([]);

  const [allContacts, setAllContacts] = useState([]);
  const [usContacts, setUSContacts] = useState([]);

  function openAllContactsModal() {
    setAllContactsModalIsOpen(true);
    allContact();
  }

  const allContact = async () => {
    let response = await Contact.getAllList();
    console.log(response);
    if (response.status === 200) {
      setContactList(response.data.results);
    }
  };
  const usContact = async () => {
    let response = await Contact.usContactList("United States");
    if (response.status === 200) {
      setContactList(response.data.results);
    }
  };

  function openUSContactsModal() {
    setUSContactsModalIsOpen(true);
    usContact();
  }

  function afterOpenModal() {
    // Your code for after the modal is opened (if needed)
  }

  function closeAllContactsModal() {
    setAllContactsModalIsOpen(false);
  }

  function closeUSContactsModal() {
    setUSContactsModalIsOpen(false);
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={openAllContactsModal}
            className="btn btn-sm mr-1 btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={openUSContactsModal}
            className="btn btn-sm mr-1 btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
        </div>
      </div>
      <Modal
        isOpen={allContactsModalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeAllContactsModal}
        style={customStyles}
        contentLabel="All Contacts Modal"
        ariaHideApp={false}
      >
        <div className="flex justify-between w-full">
          <button
            // onClick={openAllContactsModal}
            className="bg-[#46139f] mr-1"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={openUSContactsModal}
            className="btn btn-sm  mr-1"
            type="button"
          >
            US Contacts
          </button>
          <button className="bg-[#46139f]" onClick={closeAllContactsModal}>
            X
          </button>
        </div>
        <div>
          {/* Display all contacts */}
          <h6>All Contacts</h6>
          <table className="table">
            <thead>
              <tr>
                <th>Phone</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {contactList &&
                contactList.map((contact, index) => (
                  <tr key={index}>
                    <td>{contact.phone}</td>
                    <td>{contact.country.name}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Modal>

      <Modal
        isOpen={usContactsModalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeUSContactsModal}
        style={customStyles}
        contentLabel="US Contacts Modal"
        ariaHideApp={false}
      >
        <div className="flex justify-between w-full">
          <button
            onClick={openAllContactsModal}
            className="mr-1"
            type="button"
          >
            All Contacts
          </button>
          <button
            // onClick={openUSContactsModal}
            className="bg-[#ff7f50]  mr-1"
            type="button"
          >
            US Contacts
          </button>
          <button className="bg-[#46139f]" onClick={closeUSContactsModal}>
            X
          </button>
        </div>
        <div>
          {/* Display US contacts */}
          <h6>US Contacts</h6>
          <table className="table">
            <thead>
              <tr>
                <th>Phone</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {contactList &&
                contactList?.map((contact, index) => (
                  <tr key={index}>
                    <td>{contact?.phone}</td>
                    <td>{contact?.country.name}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Modal>
    </div>
  );
};

export default Problem2;
