import React from 'react';
import { Form, ImageList } from './components';
import { API_KEY } from './data';

function App() {

  const [search, setSearch] = React.useState('');
  const [hits, setHits] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(1);

  const PreviewPage = () => {
    const actual = page - 1;

    if (actual < 1) return;

    setPage(actual);

  }
  const NextPage = () => {
    const actual = page + 1;

    if (actual > total) return;

    setPage(actual);

  }

  React.useEffect(() => {

    const ConsultApi = async () => {
      if (!search) return;
  
      const url = `https://pixabay.com/api/?key=${API_KEY}&q=${search}&per_page=30&page=${page}`;
  
      const res = await fetch(url);
      const info = await res.json();
      const totalPages = Math.ceil(info.totalHits / 30);

      setHits(info.hits);
      setTotal(totalPages);

      // Mover cursos al inicio
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth' });
    }

    ConsultApi();

  }, [search, page])

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Form setSearch={setSearch} />
        </div>
      <div className="row justify-content-center">
        <ImageList hits={hits} />
        { page === 1 ? null : (
          <button type="button" className="btn btn-info mr-1" onClick={PreviewPage}>
            &laquo; Anterior
          </button>
        )}
        { page === total ? null : (
          <button type="button" className="btn btn-info mr-1" onClick={NextPage}>
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
