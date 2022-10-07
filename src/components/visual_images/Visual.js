import './Visual.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image_1 from '../../images/img.jpg';
import Image_2 from '../../images/interior_2.jpg';
import Image_3 from '../../images/interior_3.jpg';
import Image_4 from '../../images/interior_1.jpg';




const Visual = () => {

    const visual_images = [
        { Image: Image_1 },
        { Image: Image_2 },
        { Image: Image_3 },
        { Image: Image_4 }

    ]
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="container visual__container">
            <p>Visualize your ideas</p>
            <Slider className='vis_slider' {...settings}>
                {
                    visual_images.map(img => {
                        return (
                            <div className="img">
                                <img src={img.Image} alt="" />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default Visual;
