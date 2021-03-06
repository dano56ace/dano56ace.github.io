import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import { Link } from '@reach/router';
import useOnclickOutside from "react-cool-onclickoutside";


setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);

const Header= function() {

    const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenu1, setOpenMenu1] = React.useState(false);
    const [openMenu2, setOpenMenu2] = React.useState(false);
 
    const handleBtnClick1 = (): void => {
      setOpenMenu1(!openMenu1);
    };
    const handleBtnClick2 = (): void => {
      setOpenMenu2(!openMenu2);
    };
  
    const closeMenu = (): void => {
      setOpenMenu(false);
    };
    const closeMenu1 = (): void => {
      setOpenMenu1(false);
    };
    const closeMenu2 = (): void => {
      setOpenMenu2(false);
    };

 
    const ref1 = useOnclickOutside(() => {
      closeMenu1();
    });
    const ref2 = useOnclickOutside(() => {
      closeMenu2();
    });
   

    const [showmenu, btn_icon] = useState(false);
    useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
        btn_icon(false);
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          totop.classList.add("show");

        } else {
          header.classList.remove("sticky");
          totop.classList.remove("show");
        } if (window.pageYOffset > sticky) {
          closeMenu();
        }
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, []);
    return (
    <header id="myHeader" className='navbar white'>
     <div className='container'>
       <div className='row w-100-nav'>
          <div className='logo px-0'>
              <div className='navbar-title navbar-item'>
                <NavLink to="/home1">
                <img
                    src="./img/logo-3.png"
                    className="img-fluid d-block"
                    alt="#"
                  />
                  <img
                    src="./img/logo-3.png"
                    className="img-fluid d-3"
                    alt="#"
                  />
                  <img
                    src="./img/logo-light.png"
                    className="img-fluid d-none"
                    alt="#"
                  />
                </NavLink>
              </div>
          </div>

          <div className='search'>
            <input id="quick_search" className="xs-hide" name="quick_search" placeholder="Search for Games" type="text" />
          </div>

              <BreakpointProvider>
                <Breakpoint l down>
                  {showmenu &&
                  <div className='menu'>

                  <div className='navbar-item'>
                    <NavLink to="/home1" onClick={() => btn_icon(!showmenu)}>
                      Home
                    </NavLink>
                  </div>


                    <div className='navbar-item'>
                      <div ref={ref1}>
                        <div className="dropdown-custom dropdown-toggle btn"
                          onClick={handleBtnClick1}
                          >
                          Explore
                        </div>
                        {openMenu && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu1}>
                              <NavLink to="/explore2" onClick={() => btn_icon(!showmenu)}>Browse</NavLink>
                              <NavLink to="/rangking" onClick={() => btn_icon(!showmenu)}>Top Games</NavLink>
                              <NavLink to="/colection" onClick={() => btn_icon(!showmenu)}>Collection</NavLink>
                              <NavLink to="/ItemDetail" onClick={() => btn_icon(!showmenu)}>Items Details</NavLink>
                              <NavLink to="/Auction" onClick={() => btn_icon(!showmenu)}>Live Auction</NavLink>
                              <NavLink to="/helpcenter" onClick={() => btn_icon(!showmenu)}>Help Center</NavLink>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref2}>
                        <div className="dropdown-custom dropdown-toggle btn"
                          onClick={handleBtnClick2}
                          >
                          Resources
                        </div>
                        {openMenu2 && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu2}>
							                <NavLink to="/about" onClick={() => btn_icon(!showmenu)}>About Trad3U </NavLink>
                              <NavLink to="/roadmap" onClick={() => btn_icon(!showmenu)}>Roadmap </NavLink>
                              <NavLink to="/wallet" onClick={() => btn_icon(!showmenu)}>Wallet</NavLink>
                              <NavLink to="/news" onClick={() => btn_icon(!showmenu)}>News</NavLink>
                              <NavLink to="/works" onClick={() => btn_icon(!showmenu)}>Gallery</NavLink>
                              <NavLink to="/register" onClick={() => btn_icon(!showmenu)}>Register</NavLink>
                              <NavLink to="/contact" onClick={() => btn_icon(!showmenu)}>Contact Us</NavLink>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/activity" onClick={() => btn_icon(!showmenu)}>
                        Activity
                      </NavLink>
                    </div>             

					<div className='navbar-item'>
                      <NavLink to="/create" onClick={() => btn_icon(!showmenu)}>
                        Create
                      </NavLink>
                    </div>

					<div className='navbar-item'>
                      <NavLink to="/login" onClick={() => btn_icon(!showmenu)}>
                        Login
                      </NavLink>
                    </div>
               

                  </div>
                  }
                </Breakpoint>

                <Breakpoint xl>
                  <div className='menu'>
                 <div className='navbar-item'>
                      <NavLink to="/home1">
                      Home
                      <span className='lines'></span>
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref1}>
                          <div className="dropdown-custom dropdown-toggle btn"
                             onMouseEnter={handleBtnClick1} onMouseLeave={closeMenu1}>
                            Explore
                            <span className='lines'></span>
                            {openMenu1 && (
                            <div className='item-dropdown'>
                              <div className="dropdown" onClick={closeMenu1}>
                              <NavLink to="/explore2">Browse</NavLink>
                              <NavLink to="/rangking">Top NFTs</NavLink>
                              <NavLink to="/colection">Collection</NavLink>
                              <NavLink to="/ItemDetail">Items Details</NavLink>
                              <NavLink to="/Auction">Live Auction</NavLink>
                              <NavLink to="/helpcenter">Help Center</NavLink>
                              </div>
                            </div>
                          )}
                          </div>

                        </div>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref2}>
                          <div className="dropdown-custom dropdown-toggle btn"
                             onMouseEnter={handleBtnClick2} onMouseLeave={closeMenu2}>
                            Resources
                            <span className='lines'></span>
                            {openMenu2 && (
                            <div className='item-dropdown'>
                              <div className="dropdown" onClick={closeMenu2}>
								              <NavLink to="/about">About Trad3U</NavLink>
                              <NavLink to="/roadmap">Roadmap</NavLink>
                              <NavLink to="/wallet">Wallet</NavLink>
                              <NavLink to="/news">News</NavLink>
                              <NavLink to="/works">Gallery</NavLink>
                              <NavLink to="/register">Register</NavLink>
                              <NavLink to="/contact">Contact Us</NavLink>
                              </div>
                            </div>
                          )}
                          </div>
                        </div>
                    </div>

                    <div className='navbar-item'>
                      <NavLink to="/activity">
                      Activity
                      <span className='lines'></span>
                      </NavLink>
                    </div>

					<div className='navbar-item'>
                      <NavLink to="/create">
                      Create
                      <span className='lines'></span>
                      </NavLink>
                    </div>
        	
					<div className='navbar-item'>
                      <NavLink to="/login">
                      Login
                      <span className='lines'></span>
                      </NavLink>
                    </div>
 

               
                  </div>
                </Breakpoint>
              </BreakpointProvider>

              <div className='mainside'>
                <NavLink to="/wallet" className="btn-main">Connect Wallet</NavLink>
              </div>

      </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>

      </div>
    </header>
    );
}
export default Header;
