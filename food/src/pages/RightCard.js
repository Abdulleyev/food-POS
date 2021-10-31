import React, {useEffect, useState} from 'react';
import {AvField, AvForm} from 'availity-reactstrap-validation';
// import "./api";
const RightCard = (props) => {
    const [count, setCount] = useState(0);


    console.log(props.setData)

    useEffect(() => {

        alert(props.setData)
    }, [])
    return (
        <div className="right-card" >

            <h3>Orders #34562</h3>
            <button type="button" className=" button-style active">Warning</button>
            <button type="button" className=" button-style"><span>Danger</span></button>
            <button type="button" className="  button-style"><span>Dark</span></button>
            <div className="right-card-child">
                <div className="card-child-one">
                    <span>Item</span>
                </div>
                <div className="card-child-two">
                    <span>Qty</span>
                    <span>Price</span>
                </div>
            </div>
            <div className="line"></div>
            <div className="content">
                <div className="content-child">
                    <div className="food-price-image">
                        <div className="food-images">
                            <img src="/icons/eat1.png" alt=""/>
                            <div className="food-price-right">
                                <h3>Spicy seasoned sea...</h3>
                                <span>$2.29</span>
                            </div>
                        </div>
                        <div className="food-price">
                            <div  className={`box `} >{count}</div>
                            <h3>$4.58</h3>
                        </div>
                    </div>
                    <div className="search-delete-order">

                        <input type="text" className="form-control" placeholder="Please, just a little bit spicy only."/>

                        <button type="button" onClick={() => setCount(count - 1)}  className="btn btn-style"><img src="/icons/delete.png" alt=""/></button>
                    </div>
                </div>
                <div className="content-child">
                    <div className="food-price-image">
                        <div className="food-images">
                            <img src="/icons/eat1.png" alt=""/>
                            <div className="food-price-right">
                                <h3>Spicy seasoned sea...</h3>
                                <span>$2.29</span>
                            </div>
                        </div>
                        <div className="food-price">
                            <div className="box">2</div>
                            <h3>$4.58</h3>
                        </div>
                    </div>
                    <div className="search-delete-order">
                        <input type="text" className="form-control" placeholder="Order Note..."/>

                        <button type="button" className="btn btn-style"><img src="/icons/delete.png" alt=""/></button>
                    </div>
                </div>
                <div className="content-child">
                    <div className="food-price-image">
                        <div className="food-images">
                            <img src="/icons/eat1.png" alt=""/>
                            <div className="food-price-right">
                                <h3>Spicy seasoned sea...</h3>
                                <span>$2.29</span>
                            </div>
                        </div>
                        <div className="food-price">
                            <div className="box">2</div>
                            <h3>$4.58</h3>
                        </div>
                    </div>
                    <div className="search-delete-order">
                        <input type="text" className="form-control" placeholder="Order Note..."/>

                        <button type="button" className="btn btn-style"><img src="/icons/delete.png" alt=""/></button>
                    </div>
                </div>
                <div className="content-child">
                    <div className="food-price-image">
                        <div className="food-images">
                            <img src="/icons/eat1.png" alt=""/>
                            <div className="food-price-right">
                                <h3>Spicy seasoned sea...</h3>
                                <span>$2.29</span>
                            </div>
                        </div>
                        <div className="food-price">
                            <div className="box">2</div>
                            <h3>$4.58</h3>
                        </div>
                    </div>
                    <div className="search-delete-order">
                        <input type="text" className="form-control" placeholder="Order Note..."/>

                        <button type="button" className="btn btn-style"><img src="/icons/delete.png" alt=""/></button>
                    </div>
                </div>
            </div>
            <div className="right-card-footer">
                <div className="line"></div>
                <div className="footer-one">
                    <span>Discount</span>
                    <p>$0</p>
                </div>
                <div className="footer-one">
                    <span>Sub total</span>
                    <p> $ 21,03</p>
                </div>
                <button type="button" className="footer-btn-style">Continue to Payment</button>
            </div>
        </div>
    );
};

export default RightCard;