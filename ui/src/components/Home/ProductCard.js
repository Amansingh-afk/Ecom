import React from 'react';

import useModal from '../../hooks/useModal';
import ProductModal from '../layout/Modal/ProductModal';

import prod from "../../assets/images/product-01.jpg";
import prodj from "../../assets/images/icons/icon-heart-01.png";

const ProductCard = () => {

    const {isShowing, toggle} = useModal();

    return (
        <>
        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
            {/* <!-- Block2 --> */}
            <div className="block2">
                <div className="block2-pic hov-img0">
                    <img src={prod} alt="IMG-PRODUCT" />

                    <a className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04" onClick={toggle}>
                        Quick View
                    </a>
                    {/* <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 " onClick={toggle}>
                                    <TbSearch />
                                </div> */}
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                    <div className="block2-txt-child1 flex-col-l ">
                        <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                            Esprit Ruffle Shirt
                        </a>

                        <span className="stext-105 cl3">
                            $16.64
                        </span>
                    </div>

                    <div className="block2-txt-child2 flex-r p-t-3">
                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                            <img className="icon-heart1 dis-block trans-04" src={prodj} alt="ICON" />
                            {/* <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/> */}
                        </a>
                    </div>
                </div>
            
        
        <ProductModal
        showDetails={isShowing}
        hideX={toggle} 
        />
        </div>
        </div>
        </>

    );
}

export default ProductCard