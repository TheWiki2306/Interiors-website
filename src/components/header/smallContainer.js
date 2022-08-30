import { GoThreeBars } from 'react-icons/go';
import { RiCloseLine } from 'react-icons/ri';
import { useState } from "react";

const SmallContainer = () => {
    const [List, setList] = useState(false);
    const showItems = () => setList(!List);

    const items = [
        {
            Name1: 'Home',
            Name2: 'Services',
            Name3: 'Works',
            Name4: 'Contact us',
            Name5: 'News',
        },
    ]

    return (
        <div>
            <div className="nav__container-small">
                <div className="show-btn">
                    <p>Fi<span>Design</span></p>
                    <GoThreeBars className='show' onClick={showItems} />
                </div>
                <div className={List ? 'nav-btn active' : 'nav-btn'} >
                    {
                        items.map((item, index) => (
                            <div key={index} className="list-items">
                                <a href="">{item.Name1}</a>
                                <a href="">{item.Name2}</a>
                                <a href="">{item.Name3}</a>
                                <a href="">{item.Name4}</a>
                                <a href="">{item.Name5}</a>
                                <div className="signup">
                                    <a href="">Sign up</a>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default SmallContainer;
