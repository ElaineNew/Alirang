export const  Sidebar = () => {
    return (
        <div>
          {/* Sidebar */}
          <div className="bg-light border-right d-md-none d-lg-block bg-danger" style={{height:"100vh"}} id="sidebar">
            <div className="sidebar-heading bg-warning text-white">Category</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Appetizer</li>
              <li className="list-group-item">Main Dish</li>
              <li className="list-group-item">Hot Pot</li>
              <li className="list-group-item">Drinks</li>
              {/* 添加更多的侧边栏项 */}
            </ul>
          </div>
        </div>
      );
    }
    

    
