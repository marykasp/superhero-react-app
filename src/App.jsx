import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [superheroInfo, setSuperheroInfo] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/${
          import.meta.env.VITE_SECRET_KEY
        }/search/${name}`,
      );
      const data = await response.json();

      if (data.response === "success") {
        setSuperheroInfo(data.results);
      }
    } catch (err) {
      console.log(err);
    }
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
        <div className="show-container">
          <div className="content">
            {/* thumbnail */}
            <div className="content-thumbnail">
              <img src="images/thumbnail-batman.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
