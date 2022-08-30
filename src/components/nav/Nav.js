import React from 'react'
import { useState } from 'react';
const Nav = () => {
    const [Link, setLink] = useState('#');
    return (
        <nav>
            <a href="#" onClick={() => setLink('#')} className={Link === '#' ? 'active' : ''}></a>
            <a href="#topsection" onClick={() => setLink('#')} className={Link === 'topsection' ? 'active' : ''}></a>
        </nav>
    )
}

export default Nav;
