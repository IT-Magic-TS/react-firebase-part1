import "./App.css";

import Header from "./components/Header";
import Content from "./components/Content";
import { useState } from "react";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = item => {
    setEvents(prev => {
      // return prev.concat(item)
      return [...prev, item];
    });
  };

  const handleClick = id => {
    setEvents(prev => {
      return prev.filter(item => item.id !== id);
    });
  };

  const handleClose = () => {
    setShowModal(prev => {
      setShowModal(!prev);
    });
  };
  return (
    <>
      {showModal && (
        <Modal closeModal={handleClose}>
          <NewEventForm addEvent={addEvent} handleClose={handleClose} />
        </Modal>
      )}
      <Header
        title="Events in your area"
        subtitle="All the events in your area"
      />
      <Content>
        <div className="w3-container w3-center w3-margin">
          {showEvents ? (
            <button
              onClick={() => setShowEvents(false)}
              className="w3-btn w3-blue"
            >
              Hide Events
            </button>
          ) : (
            <button
              onClick={() => setShowEvents(true)}
              className="w3-btn w3-khaki"
            >
              Show Events
            </button>
          )}
        </div>
        {events.length === 0 && (
          <div className="w3-panel w3-center w3-red w3-padding w3-margin">
            <h2>No Events!</h2>
          </div>
        )}
        {showEvents && <EventList handleClick={handleClick} events={events} />}
        {!showModal && (
          <div className="w3-container w3-center">
            <button onClick={handleClose} className="w3-btn w3-teal">
              Add New Event
            </button>
          </div>
        )}
      </Content>
    </>
  );
}

export default App;
