import React from 'react';

import bg01 from "../../assets/images/banner-01.jpg"
import bg02 from "../../assets/images/banner-02.jpg"
import bg03 from "../../assets/images/banner-03.jpg"
const Banner = () => {

    return (
        <>
        <div className="sec-banner bg0 p-t-80 p-b-50">
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
					{/* <!-- Block1 --> */}
					<div className="block1 wrap-pic-w">
						<img src={bg01} alt="IMG-BANNER"/>

						<a href="product.html" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div className="block1-txt-child1 flex-col-l">
								<span className="block1-name ltext-102 trans-04 p-b-8">
									Women
								</span>

								<span className="block1-info stext-102 trans-04">
									Spring 2018
								</span>
							</div>

							<div className="block1-txt-child2 p-b-4 trans-05">
								<div className="block1-link stext-101 cl0 trans-09">
									Shop Now
								</div>
							</div>
						</a>
					</div>
				</div>

				<div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
					{/* <!-- Block1 --> */}
					<div className="block1 wrap-pic-w">
						<img src={bg02} alt="IMG-BANNER"/>

						<a href="product.html" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div className="block1-txt-child1 flex-col-l">
								<span className="block1-name ltext-102 trans-04 p-b-8">
									Men
								</span>

								<span className="block1-info stext-102 trans-04">
									Spring 2018
								</span>
							</div>

							<div className="block1-txt-child2 p-b-4 trans-05">
								<div className="block1-link stext-101 cl0 trans-09">
									Shop Now
								</div>
							</div>
						</a>
					</div>
				</div>

				<div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
					{/* <!-- Block1 --> */}
					<div className="block1 wrap-pic-w">
						<img src={bg03} alt="IMG-BANNER"/>

						<a href="product.html" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div className="block1-txt-child1 flex-col-l">
								<span className="block1-name ltext-102 trans-04 p-b-8">
									Accessories
								</span>

								<span className="block1-info stext-102 trans-04">
									New Trend
								</span>
							</div>

							<div className="block1-txt-child2 p-b-4 trans-05">
								<div className="block1-link stext-101 cl0 trans-09">
									Shop Now
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

        </>
    );
}

export default Banner;