import { Link } from "react-router-dom";
import '../css/contact.css';
export const Contact = () => {
  const googleMapLink ="https://www.google.com/maps/dir/45.3458839,-75.7732987/%E9%98%BF%E9%87%8C%E9%83%8E+merivale/@45.3509182,-75.7951736,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x4cce06fa1173ffff:0x43ebb3a437973bc9!2m2!1d-75.7355071!2d45.3594886?entry=ttu";
  
  const phoneNumber = '613-695-5188'; 
  
  const handleCallClick = () => {
      window.location.href = `tel:${phoneNumber}`;
    }
  
  return(
    <div>
      <div className="contact">
        <div className="container">

        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.470875759055!2d-75.73808202452898!3d45.35949234042012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce06fa1173ffff%3A0x43ebb3a437973bc9!2z6Zi_6YeM6YOOKE1lcml2YWxl5bqXKQ!5e0!3m2!1szh-CN!2sca!4v1696260932368!5m2!1szh-CN!2sca"  width="500"
          height="300"
          title="Embedded Page">
          </iframe>
        </div>
        <div className="phone">
          <p>
          Phone:(613)6955188
          </p>
          <button className='btn btn-danger homepage-btn'onClick={handleCallClick}>Call Us</button>

          <p>
           Address:Alirang Korean Restaurant (Merivale), Merivale Road, Ottawa, ON
          </p>
          <Link className='btn btn-danger homepage-btn map-btn'to={googleMapLink}>Google Map</Link>
          </div>
       
        </div>
      </div>
    </div>
  )
}