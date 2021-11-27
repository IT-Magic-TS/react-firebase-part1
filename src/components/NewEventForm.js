import { useRef } from "react";
import { useState } from "react/cjs/react.development";

export default function NewEventForm({ addEvent, handleClose }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("manchester");

  const handleSubmit = e => {
    e.preventDefault();

    const event = {
      title,
      date,
      location,
      id: Math.floor(Math.random() * 100000)
    };
    console.log(refExample.current.value);
    addEvent(event);
    handleClose();
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("manchester");
    refExample.current.value = "";
  };

  const refExample = useRef();

  return (
    <form className="w3-container w3-padding" onSubmit={handleSubmit}>
      <label htmlFor="refExample" className="w3-text-teal w3-left">
        Ref Example
      </label>
      <input
        type="text"
        className="w3-input w3-border w3-light-grey"
        ref={refExample}
      />
      <label htmlFor="title" className="w3-text-teal w3-left">
        Title
      </label>
      <input
        type="text"
        className="w3-input w3-border w3-light-grey"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <label htmlFor="date" className="w3-text-teal w3-left">
        Date
      </label>
      <input
        type="date"
        className="w3-input w3-border w3-light-grey"
        onChange={e => setDate(e.target.value)}
        value={date}
      />
      <select
        name="location"
        onChange={e => setLocation(e.target.value)}
        className="w3-select"
      >
        <option value="" disabled>
          Choose your location
        </option>
        <option value="manchester">Manchester</option>
        <option value="london">London</option>
        <option value="cardif">Cardif</option>
      </select>
      <div className="w3-container w3-center w3-margin">
        <button type="submit" className="w3-btn w3-blue-grey">
          Submit
        </button>
      </div>
    </form>
  );
}
