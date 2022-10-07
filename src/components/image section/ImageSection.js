import React from 'react'
import './imageSection.css';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FaRegComment } from 'react-icons/fa';
import f_img from '../../images/interior_2.jpg';
import f_img1 from '../../images/interior_3.jpg';


const ImageSection = () => {

  return (
    <section>

      <div className="container img_container">
        <div className="fixed_imgs">
          <article className='fixed_imgs-one'>
            <img src={f_img} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minus neque voluptas cum quam odit obcaecati ipsum facere fuga porro! </p>
            <div className='small_container'>
              <a href="">Learn more</a>
              <div className="smaller_container">
                <div className="likes">
                  <IoMdHeartEmpty />
                </div>
                <div className="comments">
                  <FaRegComment />
                </div>
              </div>
            </div>
          </article>

          <article className='fixed_imgs-two'>
            <img src={f_img1} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quam ea. Vel, cumque. Laborum laboriosam aut, sed odit voluptate vitae. </p>
            <div className='small_container'>
              <a href="">Learn more</a>
              <div className="smaller_container">
                <div className="likes">
                  <IoMdHeartEmpty />
                </div>
                <div className="comments">
                  <FaRegComment />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ImageSection;
