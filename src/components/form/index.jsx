import React from 'react';
import { Error } from '..';

const Form = ({ setSearch }) => {

    const [term, setTerm] = React.useState('');
    const [error, setError] = React.useState(false);

    const onSearch = (event) => {
        event.preventDefault();

        if (term.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        setSearch(term);
    }

    return ( 
        <form
            onSubmit={onSearch}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una Imagen"
                        value={term}
                        onChange={ e => setTerm(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            { error &&  <Error message="Agrege un termino de busqueda" />}
        </form>
     );
}
 
export default Form;
