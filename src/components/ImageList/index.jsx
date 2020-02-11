import React from 'react';
import Image from '../Image';

const ImageList = ({ hits }) => {
    return ( 
        <div className="col-12 p-5 row">
            {hits.map(hit => (
                <Image key={hit.id} hit={hit} />
            ))}
        </div>
     );
}
 
export default ImageList;
