import HomepagePic2 from '../images/food.jpeg';
import menu1 from '../images/menu1.jpeg';
import menu2 from '../images/menu2.jpeg';
import menu3 from '../images/menu3.jpeg';
import menu4 from '../images/menu4.jpeg';import foodImg from '../images/bibimbap.jpg';
export const Menu = () => {
  return(
    <div className='menu'>
  <h1>Menu</h1>
          <div className='menu-image'>
            <img src={menu1} alt="menu_1" id='menu-image1'/>
            <img src={menu2} alt="menu_2" />
          </div>
          <div className='menu-info'>
            <div className='image-container'>
              <div>
                <img className="" src={HomepagePic2} alt="menu" />
              </div>
            </div>
            <div className='category text-white'>
              <div>
                <p>Appitizer</p>
                <p>Main Dishes</p>
                <p>Noodles</p>
              </div>
              <div>
                <p>Soup&Salad</p>
                <p>Drinks</p>
                <p>Hot Pot</p>
              </div>

              </div>
          </div>

          <div className='menu-image'>
            <img src={menu3} alt="menu_3" />
            <img src={menu4} alt="menu_4" />
          </div>
        </div>

  )
}