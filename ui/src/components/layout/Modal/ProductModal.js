import React from "react";
import ReactDOM  from "react-dom";
import { Outlet, Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import close from "../../../assets/images/icons/icon-close.png"
import productImg1 from "../../../assets/images/product-detail-01.jpg"
import productImg2 from "../../../assets/images/product-detail-02.jpg"
import productImg3 from "../../../assets/images/product-detail-03.jpg"

const ProductModal  = ({ showDetails, hideX}) =>  showDetails ? ReactDOM.createPortal(
    
    <React.Fragment>
        <div className="wrap-modal1 p-t-60 p-b-20">
		<div className="overlay-modal1"></div>

		<div className="container">
			<div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
				<button className="how-pos3 hov3 trans-04" onClick={hideX}>
					<img src={close} alt="CLOSE" />
				</button>

				<div className="row">
					{/* <div className="col-md-6 col-lg-7 p-b-30">
						<div className="p-l-25 p-r-30 p-lr-0-lg">
							<div className="wrap-slick3 flex-sb flex-w">
								<div className="wrap-slick3-dots"></div>
								<div className="wrap-slick3-arrows flex-sb-m flex-w"></div>

								<div className="slick3 gallery-lb">
									<div className="item-slick3" data-thumb={productImg1}>
										<div className="wrap-pic-w pos-relative">
											<img src={productImg1} alt="IMG-PRODUCT" />

											<a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-01.jpg">
												<i className="fa fa-expand"></i>
											</a>
										</div>
									</div>

									<div className="item-slick3" data-thumb="images/product-detail-02.jpg">
										<div className="wrap-pic-w pos-relative">
											<img src={productImg2} alt="IMG-PRODUCT" />

											<a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-02.jpg">
												<i className="fa fa-expand"></i>
											</a>
										</div>
									</div>

									<div className="item-slick3" data-thumb="images/product-detail-03.jpg">
										<div className="wrap-pic-w pos-relative">
											<img src={productImg3} alt="IMG-PRODUCT" />

											<a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-03.jpg">
												<i className="fa fa-expand"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
<div className="col-md-6 col-lg-7 p-b-30 ">
	<div className="wrap-pic-w pos-relative ms-5 ps-4">
	<img className="product-img" src={productImg1} alt="First Img"/>
	</div>
</div>
					
					<div className="col-md-6 col-lg-5 p-b-30">
						<div className="p-r-50 p-t-5 p-lr-0-lg">
							<h4 className="mtext-105 cl2 js-name-detail p-b-14">
								Lightweight Jacket
							</h4>

							<span className="mtext-106 cl2">
								$58.79
							</span>

							<p className="stext-102 cl3 p-t-23">
								Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
							</p>
							
							{/* <!--  --> */}
							<div className="p-t-33">
								<div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										Size
									</div>

									<div className="size-204 respon6-next">
										<div className="rs1-select2 bor8 bg0">
											<select className="js-select2" name="time">
												<option>Choose an option</option>
												<option>Size S</option>
												<option>Size M</option>
												<option>Size L</option>
												<option>Size XL</option>
											</select>
											<div className="dropDownSelect2"></div>
										</div>
									</div>
								</div>

								<div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										Color
									</div>

									<div className="size-204 respon6-next">
										<div className="rs1-select2 bor8 bg0">
											<select className="js-select2" name="time">
												<option>Choose an option</option>
												<option>Red</option>
												<option>Blue</option>
												<option>White</option>
												<option>Grey</option>
											</select>
											<div className="dropDownSelect2"></div>
										</div>
									</div>
								</div>

								<div className="flex-w flex-r-m p-b-10">
									<div className="size-204 flex-w flex-m respon6-next">
										<div className="wrap-num-product flex-w m-r-20 m-tb-10">
											<div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
												<i className="fs-16 zmdi zmdi-minus"></i>
											</div>

											{/* <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value="1" /> */}

											<div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
												<i className="fs-16 zmdi zmdi-plus"></i>
											</div>
										</div>

										<button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
											Add to cart
										</button>
									</div>
								</div>	
							</div>

							<div className="flex-w flex-m p-l-100 p-t-40 respon7">
								<div className="flex-m bor9 p-r-10 m-r-11">
									<a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
										<i className="zmdi zmdi-favorite"></i>
									</a>
								</div>

								<a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
									<i className="fa fa-facebook"></i>
								</a>

								<a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
									<i className="fa fa-twitter"></i>
								</a>

								<a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
									<i className="fa fa-google-plus"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

    </React.Fragment>, document.body
) : null;

export default ProductModal;