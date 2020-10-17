import React from 'react';

const Reconocer = ({imagenURL}) => {
    return ( 
        <div className="form-full">
            <div className="reco-img">
                <img src={imagenURL} alt="" width="500" height="auto"/>
            </div>
        </div>
    );
}
 
export default Reconocer;