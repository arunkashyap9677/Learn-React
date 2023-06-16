import Header from "../../common/header";

export default function Card() {
    return (
        <div>
            <Header/>
            <img src={require('./image.jpg')} width="200" height="300px"/>
        </div>
    );

};