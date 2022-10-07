import './secondSection.css';
import { MdOutlineFileDownload } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';

const SecondSection = () => {
    return (
        <section>
            <div className="container second__container">
                <h4>Our latest projects</h4>
                <p>16</p>
                <a href="">Download album<MdOutlineFileDownload /></a>

                <div className="drop_down">
                    <ul>
                        <li>
                            <a href=""> <small>Style</small>   <RiArrowDropDownLine className='drop' />
                            </a>

                            <div className="drop_list">
                                <ul>
                                    <li><a href="">Traditional</a></li>
                                    <li><a href="">Contemporary</a></li>
                                    <li><a href="">Industrial</a></li>
                                    <li><a href="">Transitional</a></li>
                                    <li><a href="">Rustic</a></li>
                                    <li><a href="">Minimalist</a></li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a href=""> <small>Category</small>   <RiArrowDropDownLine className='drop_1' />
                            </a>

                            <div className="drop_list">
                                <ul>
                                    <li><a href="">Mediterranean</a></li>
                                    <li><a href="">Industrial</a></li>
                                    <li><a href="">Nautical </a></li>
                                    <li><a href="">Eclectic </a></li>
                                    <li><a href="">Minimalist</a></li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a href=""> <small>Location</small>   <RiArrowDropDownLine className='drop_1' />
                            </a>
                            <div className="drop_list">
                                <ul>
                                    <li><a href="">Abuja, Nigeria.</a></li>
                                    <li><a href="">Lagos, Nigeria.</a></li>
                                    <li><a href="">Accra, Ghana.</a></li>
                                    <li><a href="">South Africa.</a></li>
                                    <li><a href="">Cairo, Egypt.</a></li>
                                    <li><a href="">Ethopia.</a></li>

                                </ul>
                            </div>
                        </li>

                        <li>
                            <a href=""> <small>Price</small>   <RiArrowDropDownLine className='drop' />
                            </a>
                        </li>
                    </ul>
                </div>


            </div>
        </section>
    )
}

export default SecondSection;
