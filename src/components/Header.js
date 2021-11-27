function Header({ title, subtitle }) {
  return (
    <div className="w3-container w3-teal w3-center">
      <h1 className="w3-block">{title ? title : "Mario Kingdom Events"}</h1>
      <h2>{subtitle ? subtitle : "All the events in Mario Kingdom"}</h2>
    </div>
  );
}

export default Header;
