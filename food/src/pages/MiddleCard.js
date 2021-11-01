import React, {useState} from 'react';
import {stockData} from "../const/data";
import RightCard from "./RightCard";
// import {RightCard} from "RightCard"
const MiddleCard = (props) => {
    console.log(props);
    const [Open, isOpen] = useState(false);

    const toggle = () => {
        isOpen(!Open);
    }

    const [data, setData] = useState('');

    const sendItem =(fullItem)=>{

        setData(fullItem)
    }
    return (
        <div className="middle-card d-flex">

            <div className="centrBox">
                <div className="select">
                    <div className="header">
                        <div className="header-left">
                            <h3>Jaegar Resto</h3>
                            <span>Tuesday, 2 Feb 2021</span>
                        </div>
                        <div className="header-right">
                            <div className="form-group ">
                                <img src="/icons/search.png" alt=""/>
                                <input type="text" className="form-control" placeholder="Search for food, coffe, etc.."/>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-sm">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a href="#" className="nav-link">Hot Dishes</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Cold Dishes</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Soup</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Grill</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Appetizer</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Dessert</a></li>
                        </ul>
                    </nav>
                    <div className="line"></div>

                    <div className="dine-in" >
                        <h4>Choose Dishes</h4>
                        <div className={ Open ? "d-block " : "d-none"}>
                            <div className="select-box">
                                <div className="small-box"></div>
                            </div>

                        </div>
                        <div className="dine-in-right" onClick={toggle}>
                            <img src="/icons/arrow-down-s-line.png" alt=""/>
                            <span>Dine In</span>
                        </div>
                    </div>
                </div>
                <div className="food-cards">

                    {
                        stockData.map(item => (
                            <div className="food-cards-child" onClick={()=>RightCard.counter}>
                                <img src={item.img} alt="" />
                                <span>{item.title}</span>
                                <p>$ {item.price}</p>
                                <span>{item.content}</span>
                            </div>
                        ))
                    }


                </div>


            </div>
            <RightCard sendData={data}/>
        </div>
    );
};

export default MiddleCard;