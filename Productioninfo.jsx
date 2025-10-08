import IMG from './assets/react.svg';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function Productioninfo() {
    const Data = [
        {
            'id': 1,
            'name': 'raspberry',
            'description': 'Car',
            'price': 20000,
            'brand': 'sujiki',
            'image': IMG
        },
        {
            'id': 2,
            'name': 'sujiki',
            'description': 'motor',
            'price': 120000,
            'brand': 'yamaha',
            'image': IMG
        },
        {
            'id': 3,
            'name': 'bunny',
            'description': 'toy',
            'price': 23400,
            'brand': 'mozilla',
            'image': IMG
        }
    ]
    const receivedata = useParams();
    console.log(receivedata);
    const [mycard, setmycard] = useState(null);
    useEffect(() => {
        Data.filter(ele => {
            if (ele.id == parseInt(receivedata.ID)) {
                const result=setmycard(ele);
                setres(result);
            }
        }, [res]);
    })
    return (
        <>
         {mycard?
                <>
                    <div className="cardinfo">
                        <div className="imagepart">
                            <img src={mycard.image}/>
                        </div>
                        <div className="carddesc">
                            <div>name: {mycard.name}</div>
                            <div>description: {mycard.description}</div>
                            <div>price: {mycard.price}</div>
                            <div>brand: {mycard.brand}</div>
                        </div>
                    </div>
                    </>
                : <></>}
        </>
    )
}
export default Productioninfo;