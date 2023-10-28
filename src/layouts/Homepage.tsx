import React from 'react';
import HomepagePic1 from '../images/bibimbap.jpg';
import HomepagePic3 from '../images/manyfood.jpeg';
import {Menu} from './Menu';
import 'font-awesome/css/font-awesome.min.css';
import '../css/homepage.css';
import { Link } from 'react-router-dom';
export const HomePage = () => {
  const scrollButton = document.getElementById('scroll_btn');
  const targetElement = document.getElementById('menu-image1');
  scrollButton?.addEventListener('click', ()=>{
    targetElement?.scrollIntoView({behavior:"smooth"});
  })
  const googleMapLink ="https://www.google.com/maps/dir/45.3458839,-75.7732987/%E9%98%BF%E9%87%8C%E9%83%8E+merivale/@45.3509182,-75.7951736,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x4cce06fa1173ffff:0x43ebb3a437973bc9!2m2!1d-75.7355071!2d45.3594886?entry=ttu";
  
  const phoneNumber = '613-695-5188'; 
  
  const handleCallClick = () => {
      window.location.href = `tel:${phoneNumber}`;
    }
  
  return(
    <div>
      <div className='banner'>
        <div className='image-container'>
          <div>
          <img src={HomepagePic1} alt="food_picture" />
          </div>
        </div>
        <div className='slogan'>
          <h1 className='text-theme homepage-name'>Alirang</h1>
          <p className='text-white homepage-slogan'>Authentic Korean Food</p>
          <button className='btn btn-danger homepage-btn' id='scroll_btn'>Explore Menu</button>
        </div>
      </div>
    <div className='container'> 
      <Menu/>
    </div>
    <div className='openning'>
      <div className='image-container image-container-dark'>
        <div>
          <img src={HomepagePic3} alt="food_picture" />
        </div>
      </div>
      <div className='openning-hour'>
        <div>
        <h1>Openning Hour</h1>
          <Link className='btn btn-danger homepage-btn map-btn'to={googleMapLink}>Google Map</Link>
          <button className='btn btn-danger homepage-btn'onClick={handleCallClick}>Call Us</button>
        </div>
        <div className='format'>
        <div>
        <p>Monday</p>
        <p>Tuesday</p>
        <p>Wednesday</p>
        <p>Thursday</p>
        <p>Friday</p>
        <p>Saturday</p>
        <p>Sunday</p>
        </div>
        <div>
        <p>3:30p.m. ~ 9:30p.m.</p>
        <p>Closed</p>
        <p>Closed</p>
        <p>3:30p.m. ~ 9:30p.m.</p>
        <p>3:30p.m. ~ 9:30p.m.</p>
        <p>3:30p.m. ~ 9:30p.m.</p>
        <p>3:30p.m. ~ 9:30p.m.</p>
        </div>
        </div>

      </div>
    </div>
    </div>
  )
}