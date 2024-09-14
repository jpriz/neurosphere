import { Outlet, Link } from "react-router-dom";
import logo from "../logo/logo-intero.png"
const LayoutPage = () => {
  return (
    <>
      <div class="app">
          <div class="header">
            <Link to="/"><img class="logo" alt="logo" src={logo}/></Link>
          </div>
          <div class="content">
            <Outlet />
          </div>
          <div class="tab-list">
            <nav>
              <div class="tab-list-item ">
                <Link to="/forum">Forum</Link>
              </div>
              <div class="tab-list-item ">
                <Link to="/map">Mappa</Link>
              </div>
              <div class="tab-list-item ">
                <Link to="/match">Match</Link>
              </div>
              </nav>
          </div>
      </div>
    </>
  )
};
export default LayoutPage;