import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "../App.css";
import { useSelector } from "react-redux";

export const Header = () => {
  const state = useSelector((state) => state.handleBasket);
  return (
    <Fragment>
      <header className="siteheader">
        <div className="logo">
          <i className="bx bxs-leaf logoicon"></i>
          Everything<span className="logopart2">Shop</span>
        </div>

        <nav>
          <ul className="navmenu">
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/cart"
              >
                Basket
              </NavLink>
            </li> */}
          </ul>
        </nav>

        <ul className="navicons">
          <NavLink to="/cart" className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
          </NavLink>
        </ul>
      </header>
    </Fragment>
  );
};
