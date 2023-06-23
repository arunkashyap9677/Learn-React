import './card.css';

export default function Card(properties) {
    const {card} = properties;
    console.log(properties);
    return (
        <div>
            <div className="card">
                <img src={require('../../images/my-image.jpg')} className="card--image"/>
                <div className="card--stats">
                    <span >{card.rating}</span>
                    <span className="gray">({card.reviewCount}) *</span>
                    <span className="gray">{card.country}</span>
                </div>
                <p>{card.title}</p>
                <p>From {card.fee} per person</p>
            </div>
        </div>
    );

};