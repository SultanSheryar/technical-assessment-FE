import React, { useEffect } from 'react';
import Card from './components/Card';
import Nav from "./components/Nav"
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

type data = {
  Title?: String,
  Poster?: string,
  Plot?: string,
  Director?: string
}
function App() {
  const [data, setData] = React.useState<data[]>([])
  const [query, setQuery] = React.useState('')
  useEffect(() => {
    fetchData()
  }, [])
  function fetchData() {
    fetch(`http://localhost:8080/searchMovies`, { mode: 'cors' }).then(res => res.json()).then(res => setData(res.data)).catch(e => console.log(e))
  }
  function Search(e: any): any {
    setQuery(e.target.value)
  }
  function SearchData(): void {
    const response = fetch(`http://localhost:8080/searchMovies?search=${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json()).then(res => { setData(res.data) }).catch(e => console.log(e))
  }

  return (<>
    <Nav onClickHandler={SearchData} onChangeHandler={Search} />
    <div className='card-grid'>
      <>{data.map((row: data, index) => <div key={index}> <Card title={row.Title} poster={row.Poster} plot={row.Plot} director={row.Director} key={index} /></div>)}
      </>
    </div>
  </>
  );
}

export default App;
