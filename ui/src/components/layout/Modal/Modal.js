import React from 'react';
import ReactDOM from 'react-dom';


import { TbSearch } from "react-icons/tb";
import iconClose2 from '../../../assets/images/icons/icon-close2.png'

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
    
    <React.Fragment>
        <div className="modal-search-header flex-c-m ">
            <div className="container-search-header">
                <button className="flex-c-m btn-hide-modal-search trans-04 " onClick={hide}>
                    <img src={iconClose2} alt="CLOSE" />
                </button>

                <form className="wrap-search-header flex-w p-l-15">
                    <button className="flex-c-m trans-04">
                        <TbSearch />
                    </button>
                    <input className="plh3" type="text" name="search" placeholder="Search..." />
                </form>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

export default Modal;



