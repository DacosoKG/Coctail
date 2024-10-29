import { useState } from "react";
import { cocktails } from "../public/data.js";
import "./App.css";
import EachButton from "./component/EachButton.jsx";
import SingleCoctail from "./component/singleCoctail.jsx";

function App() {
  const [search, setSearch] = useState(cocktails);
  const [inputVal, setInputVal] = useState("");
  const catNames = ["All"];
  cocktails.forEach((item) => {
    if (!catNames.includes(item.strCategory)) {
      catNames.push(item.strCategory);
    }
  });

  const handleCategory = (name) => {
    if (name === "All") {
      setSearch(cocktails);
    } else {
      const filteredData = cocktails.filter(
        (item) => item.strCategory === name
      );
      setSearch(filteredData);
    }
  };

  const handeChange = (e) => {
    setInputVal(e.target.value);
  };

  const deleteBtn = () => {
    setInputVal("");
    setSearch(cocktails);
  };

  const searchFn = (name) => {
    const value = name.trim().toLowerCase();
    const filteredData = cocktails.filter((item) =>
      item.strDrink.toLowerCase().includes(value)
    );
    setSearch(filteredData);
  };
  return (
    <>
      <div className="container">
        <header>
          <h1>Cocktail Project</h1>
          <div className="search-wrapper">
            <input
              onChange={handeChange}
              id="search"
              type="text"
              placeholder="Search a cocktail.."
              value={inputVal}
            />
            <i onClick={deleteBtn} className="fa fa-xmark clear"></i>
          </div>
          <button
            onClick={() => {
              searchFn(inputVal);
            }}
            id="search-btn"
          >
            Search
          </button>
        </header>
        <div className="wrapper">
          <nav>
            <ul className="list">
              {catNames.map((item, index) => {
                return (
                  <EachButton
                    name={item}
                    key={index}
                    handleCategory={handleCategory}
                  />
                );
              })}
            </ul>
          </nav>
          <main className="main-content">
            {search.map((item) => {
              const {
                idDrink,
                strDrink,
                strCategory,
                strDrinkThumb,
                strAlcoholic,
              } = item;
              return (
                <SingleCoctail
                  type={strAlcoholic}
                  key={idDrink}
                  name={strDrink}
                  category={strCategory}
                  img={strDrinkThumb}
                />
              );
            })}
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
