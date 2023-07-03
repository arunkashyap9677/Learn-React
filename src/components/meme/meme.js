import './meme.css'

export default function Meme() {
    return (
        <main>
            <div className="form">
                <input type="text" placeholder="type a meme" className="form--input"/>
                <input type="text" placeholder="type punchline" className="form--input"/>
                <button className="form--button">get a new meme image</button>
            </div>
        </main>
    );
}