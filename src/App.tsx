import CardImage from "./components/CardImage";
import Navbar from "./components/Navbar";

/**
 * The app component.
 */
const App = () => {
  return <div className="tz-application">
    <Navbar />
    <div style={{ gridColumn: "2 / 6" }}>
      <div className="tz-hero">
        <h1>Système de design</h1>
        <p>
          Ici, vous retouverez l'ensemble de composants et de guides que j'ai créé pour la conception d'une application.
        </p>
      </div>
      <div style={{ padding: "0 32px" }}>
        <h2>Composants</h2>
        <p>
          Les composants sont les éléments les plus primordiaux et permettent de constituer une interface utilisateur.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
        </div>
      </div>
    </div>
  </div>
}

export default App;