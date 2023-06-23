import './headerMemeGenerator.css';
function HeaderMeme() {
    return (
        <header className='header'>
                <img src={require('../images/logo192.png')}
                    className='header--image'/>
                <h2 className='header--title'>Meme Generator</h2>
                <h4 className='header--project'>React Course - Dynamic site</h4>
        </header>
    );
}

export default HeaderMeme;