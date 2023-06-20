import Header from "../../common/header";
import './card.css';

export default function Card(properties) {
    const {title, fee, country, reviewCount, rating} = properties;
    console.log(properties);
    return (
        <div>
            <div className="card">
                <img src={require('../../images/my-image.jpg')} className="card--image"/>
                <div className="card--stats">
                    <span >{rating}</span>
                    <span className="gray">({reviewCount}) *</span>
                    <span className="gray">{country}</span>
                </div>
                <p>{title}</p>
                <p>From {fee} per person</p>
            </div>
        </div>
    );

};