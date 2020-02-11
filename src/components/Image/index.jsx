import React from 'react';

const Image = ({ hit }) => {

    const { largeImageURL, likes, previewURL, tags, views } = hit;

    return ( 
        <div className="col-12 col-sm-6 cl-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" />
            </div>
        </div>
     );
}
 
export default Image;
