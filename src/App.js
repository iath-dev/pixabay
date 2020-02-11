import React from 'react';
import { Form, ImageList } from './components';
import { API_KEY } from './data';

function App() {

  const [search, setSearch] = React.useState('');
  const [hits, setHits] = React.useState([]);

  React.useEffect(() => {

    const ConsultApi = async () => {
      if (!search) return;
  
      const url = `https://pixabay.com/api/?key=${API_KEY}&q=${search}&per_page=30`;
  
      const res = await fetch(url);
      const info = await res.json();

      setHits(info.hits);
    }

    ConsultApi();

  }, [search])

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Form setSearch={setSearch} />
        </div>
      <div className="row justify-content-center">
        <ImageList hits={hits} />
      </div>
    </div>
  );
}

export default App;
