import foodImg from '../../images/bibimbap.jpg';
import '../../css/item.css';

export const Item = () => {
  //add to cart
  const AddToCart = () =>{

  }

  return(
    <div className='item'>
    <div className='row'>
      <div className='col-md-5'>
      <img src={foodImg} alt="food_pic" />
      </div>
      <div className='col-md-7 item-info'>
        <h3>Name:toboki</h3>
        <p>Description:Fried rice cake with Korean hot sauce.</p>
        <p>Price: $16</p>
        <button className='btn btn-danger' onClick={AddToCart}>Add</button>
      </div>
    </div>
  </div>
  )
}