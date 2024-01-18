import { useEffect, useState } from "react";
import Tabs from "./components/Tabs";
import Batman from "./assets/thumbnail-batman.jpg";
import SearchForm from "./components/SearchForm";
import Sidebar from "./components/Sidebar";
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
  {
    id: 4,
    label: "connections",
    titles: ["group-affiliation", "relatives"],
  },
];

function App() {
  const [name, setName] = useState("");
  const [allSuperheros, setAllSuperheros] = useState([]);
  const [superheroInfo, setSuperheroInfo] = useState(null);

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
    console.log(`Name set by input: ${name}`);
    e.preventDefault();
    // fetch hero by search query
    const results = await fetchHero(name);
    // save first result to state
    if (results.response === "success") {
      setSuperheroInfo(results.results[0]);
    }
    console.log(results);

    // after search clear name in input
    setName("");
  };

  return (
    <main>
      <Sidebar />
      <section className="main-container">
        <div id="container">
          <div className="header">
            <h2 className="header-title">
              Super<span>Hero.</span>
            </h2>
            <SearchForm
              handleSubmit={handleSubmit}
              handleSetName={setName}
              name={name}
            />
          </div>
          {/* end of app header */}
          {superheroInfo && (
            <div className="show-hero-container">
              <div className="hero-content">
                {/* thumbnail */}
                <div className="hero-thumbnail">
                  <img src={superheroInfo.image.url} alt={superheroInfo.name} />
                </div>

                <div className="hero-content-list">
                  <h2 className="name">{superheroInfo.name}</h2>

                  <Tabs tabs={tabData} hero={superheroInfo} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
