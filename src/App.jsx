import { useEffect, useState } from "react";
import Tabs from "./components/Tabs";
import Batman from "./assets/thumbnail-batman.jpg";
import { fetchHero } from "./utils/fetchHeros";

const tabData = [
  { id: 1, label: "powerstats" },
  { id: 2, label: "biography" },
  { id: 3, label: "appearance" },
  { id: 4, label: "connections" },
];

function App() {
  const [name, setName] = useState("");
  const [allSuperheros, setAllSuperheros] = useState([]);
  const [superheroInfo, setSuperheroInfo] = useState(null);
  console.log(superheroInfo);

  useEffect(() => {
    (async () => {
      const data = await fetchHero("batman");
      console.log(data);

      setSuperheroInfo(data.results[0]);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // fetch hero by search query
    const results = await fetchHero(name);
    console.log(results);
  };

  return (
    <main>
      <div id="container">
        <div className="header">
          <h2 className="header-title">
            Super<span>Hero.</span>
          </h2>
          <form>
            <input
              className="form-control"
              type="text"
              placeholder="Search for a superhero..."
              name="search"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="search-btn" onClick={handleSubmit}>
              {/* react icons*/}
              Search
            </button>
          </form>
        </div>
        {/* end of app header */}
        <div className="show-hero-container">
          <div className="hero-content">
            {/* thumbnail */}
            <div className="hero-thumbnail">
              <img src={Batman} alt="batman" />
            </div>

            <div className="hero-info-list">
              <h2 className="name">Batman</h2>

              {/* tabs */}
              <Tabs tabs={tabData} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
