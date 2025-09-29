const Navbar = () => {
  return <nav className="tz-navbar">
    <div className="tz-square-logo" style={{ margin: "16px" }}>
      <pre>
      &nbsp;design
      <br />
      .tamdaz
      <br />
      .fr<span className="cursor-blinking">_</span>
      </pre>
    </div>
    <br />
    <button className="tz-navbar-item selected">Accueil</button>
    <button className="tz-navbar-item">La palette de couleurs</button>
    <button className="tz-navbar-item">Les composants</button>
    <button className="tz-navbar-item">Le guide</button>
  </nav>
}

export default Navbar;