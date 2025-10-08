import IMG from './assets/react.svg';
function Productioncard(){
    const Data=[
        {
            'id':1,
            'name':'raspberry',
            'description':'Car',
            'price':20000,
            'brand':'sujiki',
            'image':IMG
        },
        {
            'id':2,
            'name':'sujiki',
            'description':'motor',
            'price':120000,
            'brand':'yamaha',
            'image':IMG
        },
        {
            'id':3,
            'name':'bunny',
            'description':'toy',
            'price':23400,
            'brand':'mozilla',
            'image':IMG
        }
    ]
    return(
        <div className="parent">
            {Data.map((ele) => (
                <div key={ele.id}  className="cardinfo" onClick={() => { window.location.href = `/productioninfo/${ele.id}` }}>
                    <div className="imagepart">
                        <img src={ele.image} alt={ele.name} />
                    </div>
                    <div className="carddesc">
                        <div>price:{ele.price}</div>
                        <div>brand:{ele.brand}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Productioncard;