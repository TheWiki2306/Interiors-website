import React from 'react';
import './topSection.css';
import CreateAccount from './CreateAccount';

const TopSection = () => {
    return (
        <div>
            <article className="container top__container">
                <h4>Best Interior design</h4>
                <h3>concepts you'll need!</h3>

                <p>It is the human perspective that sparks innovation. it drives sustainability. It helps us to make choices that are more free, more intelligent and more relevant.</p>

                <CreateAccount />


            </article>

        </div>
    )
}

export default TopSection;
