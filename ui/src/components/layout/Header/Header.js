import React from 'react';

import logo01 from '../../../assets/images/icons/logo-01.png';
import { TbSearch, TbShoppingCart, TbHeart } from "react-icons/tb";
import Modal from '../Modal/SearchModal';
import useModal from '../../../hooks/useModal';



const Header = () => {

    const { isShowing, toggle } = useModal();

    return (
        <>
            <header>
                {/* <!-- Header desktop --> */}
                <div className="container-menu-desktop">
                    {/* <!-- Topbar --> */}
                    <div className="top-bar">
                        <div className="content-topbar flex-sb-m h-full container">
                            <div className="left-top-bar">
                                Free shipping for standard order over $100
                            </div>

                            <div className="right-top-bar flex-w h-full">
                                <a href="#" className="flex-c-m trans-04 p-lr-25">
                                    Help & FAQs
                                </a>

                                <a href="#" className="flex-c-m trans-04 p-lr-25">
                                    My Account
                                </a>

                                <a href="#" className="flex-c-m trans-04 p-lr-25">
                                    EN
                                </a>

                                <a href="#" className="flex-c-m trans-04 p-lr-25">
                                    USD
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="wrap-menu-desktop">
                        <nav className="limiter-menu-desktop container">

                            {/* <!-- Logo desktop -->		 */}
                            <a href="#" className="logo">
                                <img src={logo01} alt="IMG-LOGO" />
                            </a>

                            {/* <!-- Menu desktop --> */}
                            <div className="menu-desktop">
                                <ul className="main-menu">
                                    <li className="active-menu">
                                        <a href="index.html">Home</a>
                                        <ul className="sub-menu">
                                            <li><a href="index.html">Homepage 1</a></li>
                                            <li><a href="home-02.html">Homepage 2</a></li>
                                            <li><a href="home-03.html">Homepage 3</a></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a href="product.html">Shop</a>
                                    </li>

                                    <li className="label1" data-label1="hot">
                                        <a href="shoping-cart.html">Features</a>
                                    </li>

                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>

                                    <li>
                                        <a href="about.html">About</a>
                                    </li>

                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>

                            {/* <!-- Icon header --> */}
                            <div className="wrap-icon-header flex-w flex-r-m">
                                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 " onClick={toggle}>
                                    <TbSearch />
                                </div>

                                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="2">
                                    <TbShoppingCart />
                                </div>

                                <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0">
                                    <TbHeart />
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* <!-- Header Mobile --> */}
                <div className="wrap-header-mobile">
                    {/* <!-- Logo moblie -->		 */}
                    <div className="logo-mobile">
                        <a href="index.html">
                            <img src={logo01} alt="IMG-LOGO" />
                        </a>
                    </div>

                    {/* <!-- Icon header --> */}
                    <div className="wrap-icon-header flex-w flex-r-m m-r-15">
                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 " onClick={toggle}>
                            {/* <i className="zmdi zmdi-search"></i> */} k
                        </div>

                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="2">
                            <i className="zmdi zmdi-shopping-cart"></i>
                        </div>

                        <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="0">
                            <i className="zmdi zmdi-favorite-outline"></i>
                        </a>
                    </div>

                    {/* <!-- Button show menu --> */}
                    <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </div>
                </div>


                {/* <!-- Menu Mobile --> */}
                <div className="menu-mobile">
                    <ul className="topbar-mobile">
                        <li>
                            <div className="left-top-bar">
                                Free shipping for standard order over $100
                            </div>
                        </li>

                        <li>
                            <div className="right-top-bar flex-w h-full">
                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    Help & FAQs
                                </a>

                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    My Account
                                </a>

                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    EN
                                </a>

                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    USD
                                </a>
                            </div>
                        </li>
                    </ul>

                    <ul className="main-menu-m">
                        <li>
                            <a href="index.html">Home</a>
                            <ul className="sub-menu-m">
                                <li><a href="index.html">Homepage 1</a></li>
                                <li><a href="home-02.html">Homepage 2</a></li>
                                <li><a href="home-03.html">Homepage 3</a></li>
                            </ul>
                            <span className="arrow-main-menu-m">
                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                            </span>
                        </li>

                        <li>
                            <a href="product.html">Shop</a>
                        </li>

                        <li>
                            <a href="shoping-cart.html" className="label1 rs1" data-label1="hot">Features</a>
                        </li>

                        <li>
                            <a href="blog.html">Blog</a>
                        </li>

                        <li>
                            <a href="about.html">About</a>
                        </li>

                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                />
            </header>

        </>
    );
}

export default Header;