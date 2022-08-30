import './secondSection.css';
import { MdOutlineFileDownload } from 'react-icons/md';

const SectionSection = () => {
    return (
        <section>
            <div className="div container second__container">
                <h4>Our latest projects</h4>
                <p>16</p>
                <a href="">Download album<MdOutlineFileDownload /></a>
            </div>
        </section>
    )
}

export default SectionSection;
