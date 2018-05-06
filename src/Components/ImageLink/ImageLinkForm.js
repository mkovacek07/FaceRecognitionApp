import React from 'react';


const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{
    return(
        <div className='ma2' >
            <p className='f3'>
                {'This Web app will detect faces in your images!'}
            </p>
            <div className='shadow-10 ma2 ImageLink w-70 h-30 center'>
                <input className='f4 pa2  w-70 center shadow-2' type='tex' onChange={onInputChange} />
                <button className='w-30 h-25 grow f4 ma0-l link ph3 pv2 dib white bg-light-purple shadow-2 pad1' onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>
    );
};

export default ImageLinkForm;