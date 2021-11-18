import React from 'react';
import Saludo from './Saludo'

const LinkImagen = ({onInputChange, onBtnSubmit}) => {

    return(
        <div className="form-full">
            <Saludo/>
            <p>{`What's in there...? Here you will be able to detect what's in your image.`}</p>
            <p>{`Paste the link of the image in here and click verify.`}</p>
            <div className="form">
                <input 
                    type="text"
                    onChange={onInputChange} 
                />
                <button
                    onClick={onBtnSubmit}
                >Verify</button>
            </div>
        </div>
    ) 
}
 
export default LinkImagen;