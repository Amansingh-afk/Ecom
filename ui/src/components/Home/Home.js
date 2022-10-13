import React from 'react';

import Banner from "./Banner.js";
import ProductCard from "./ProductCard.js";

const Home = () => {
    return (
        <><Banner />
            <section className="bg0 p-t-23 p-b-140">
                <div className="container">
                    <div className="p-b-10">
                        <h3 className="ltext-103 cl5">
                            Product Overview
                        </h3>
                    </div>

                    <div className="flex-w flex-sb-m p-b-52">
                        <div className="flex-w flex-l-m filter-tope-group m-tb-10">
                            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
                                All Products
                            </button>

                            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
                                Women
                            </button>

                            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".men">
                                Men
                            </button>

                            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".bag">
                                Bag
                            </button>

                            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".shoes">
                                Shoes
                            </button>

                            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".watches">
                                Watches
                            </button>
                        </div>

                        <div className="flex-w flex-c-m m-tb-10">
                            <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                                <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                                <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                                Filter
                            </div>

                            <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                                <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                                Search
                            </div>
                        </div>
                    </div>

                    <div className="container" id="container">

                        <ProductCard />

                    </div>
                </div>
            </section>
        </>

    );
}

export default Home