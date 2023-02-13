import React, {useState} from 'react';
import cake from './images/cake.jpg'
import syrniki from './images/c.jpg'
import strawberry from './images/straw.jpg'
import ObjectItem from "./Item/ObjectItem";
import './pages.css'

const Objects = () => {
    const object = {id: 1, name: 'Торт Наполеон', description:"Торт с маслным кремом"};
    const object2 = {id: 2, name: 'Клубника в шоколаде', description:"Набор клубники в белом и молочном шоколаде, посыпанный миндальной и кокосовой струшкой"};
    const object3 = {id: 3, name: 'Сырники', description:"Жареные лепешки из творога"};

    return (
        <div className="page">
            <h2>
                Object page
            </h2>
            <div className="listItems">
                <ObjectItem name={object.name} image={cake} des={object.description}/>
                <ObjectItem name={object2.name} image={strawberry} des={object2.description}/>
                <ObjectItem name={object3.name} image={syrniki} des={object3.description}/>
            </div>
        </div>
    );
};

export default Objects;