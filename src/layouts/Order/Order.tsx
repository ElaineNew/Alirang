import '../../css/order.css';
import { Item } from './Item';
import {Sidebar} from './Sidebar';
import { TopMenu } from './TopMenu';
export const Order = () => {
  return(
    <div className='order d-flex'>
      <div className='sidebar d-sm-block d-md-none'>
        <Sidebar/>
      </div>
      <div className='items'>
        <div className='topmenu d-sm-none d-md-block'>
         <TopMenu/>
        </div>
        <Item />
        
      </div>

    </div>
  )
}