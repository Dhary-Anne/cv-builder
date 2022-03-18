import React from "react";

function Header(props){
    const { handleFlip } = props;
    return(
        <header>
            <div className='logo'>
                <h1>CV Builder</h1>
            </div>
            <button className='flip-button btn' onClick={handleFlip}>
                <span className='icons'></span>
            </button>
        </header>
    );
}

export default Header;