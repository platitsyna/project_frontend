import React from 'react'
import './ObjectItem.css'

const ObjectItem = ({name, image, des}) => {
    return (
        <div className='objectElem'>
            <h4 className='objH4'>{name}</h4>
            <img src={image} alt="alt"/>
            <text className='objText'>{des}</text>
        </div>
    );
};

export default ObjectItem;