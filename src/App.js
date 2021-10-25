import Card from "./components/card/card";
import Filter from "./components/filter/filter";
import Header from "./components/header/header";
import Movies from "./normalized-movies";

function App() {
  return (
    <>
       <main>
        <Header />
        <div className="container-xl">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="container">
                <Filter />
                <section className="mb-4">
                  <h2>Bookmarked movies</h2>
                  <ul className="bookmarked-movies list-group" />
                </section>
              </div>
            </div>
            <section className="col-md-8">
              <h2 className="h5">Search results</h2>
              <div className="alert alert-info">Use the form on the left to search for a movie</div>
              <ul className="search-results row list-unstyled">
                {Movies.map(movie => <Card {...movie} />)}
              </ul>
            </section>
          </div>{/* row */}
        </div>{/* container */}
      </main>
    </>
  );
}

export default App;