import React from 'react'
import "./styling/home.css"

function Modal (props) {
    return (
        <div class="modal fade" id={props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className="text-portofolio">
                            <b>{props.name}</b>
                            <div className="star-line">
                                <div className="line2"></div>
                                <svg className="star2 bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>       
                                <div className="line2"></div>
                            </div>
                        </div>

                        <div className="col-lg-6 image">
                            <img className="img-fluid" src={props.img} alt="" />
                        </div>                    
                    </div>
                    <p className="text text-description w-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A praesentium assumenda accusamus magnam fugit placeat facilis provident vero neque, repellendus sunt magni quis labore doloremque eius quam repudiandae eos tempora?</p>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close Window</button>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default Modal