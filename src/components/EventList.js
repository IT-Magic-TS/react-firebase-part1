export default function EventList({ events, handleClick }) {
  return (
    <ul className="w3-ul w3-margin">
      {events.map(item => (
        <li className="w3-display-container" key={item.id}>
          {item.title}
          <p style={{ textTransform: "capitalize" }}>
            {item.location} - {item.date}
          </p>
          <span
            onClick={() => handleClick(item.id)}
            className="w3-button w3-display-right"
          >
            &times;
          </span>
        </li>
      ))}
    </ul>
  );
}
