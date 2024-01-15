import { useEffect, useState } from "react";
import Tabs from "./components/Tabs";
import Batman from "./assets/thumbnail-batman.jpg";
import { fetchHero } from "./utils/fetchHeros";

const tabData = [
  {
    id: 1,
    label: "powerstats",
    titles: [
      "intelligence",
      "strength",
      "speed",
      "durability",
      "power",
      "combat",
    ],
  },
  {
    id: 2,
    label: "biography",
    titles: [
      "full name",
      "alert-egos",
      "aliases",
      "place-of-birth",
      "first-apperance",
      "publisher",
    ],
  },
  {
    id: 3,
    label: "appearance",
    titles: ["gender", "race", "height", "weight", "eye-color", "hair-color"],
  },
];

function App() {
  const [name, setName] = useState("");
  const [allSuperheros, setAllSuperheros] = useState([]);
  const [superheroInfo, setSuperheroInfo] = useState(null);
  console.log(superheroInfo.image);

  useEffect(() => {
    console.log("Use Effect is being invoked");
    fetchHero("batman")
      .then((data) => {
        // console.log(data);
        setSuperheroInfo(data.results[0]);
      })
      .catch(() => {
        console.log("Error occurred");
      });
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
        {superheroInfo && (
          <div className="show-hero-container">
            <div className="hero-content">
              {/* thumbnail */}
              <div className="hero-thumbnail">
                <img src={superheroInfo.image.url} alt={superheroInfo.name} />
              </div>

              <div className="hero-info-list">
                <h2 className="name">{superheroInfo.name}</h2>

                <Tabs tabs={tabData} hero={superheroInfo} />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
