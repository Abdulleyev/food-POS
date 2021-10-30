import React, {useState} from 'react';

const MiddleCard = () => {
    const [Open, isOpen] = useState(false);
    const toggle = () => {
        isOpen(!Open);
    }
    return (
        <div className="middle-card">
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
            <div className="dine-in" onClick={toggle}>
                <h4>Choose Dishes</h4>
                <div className={ Open ? "d-block " : "d-none"}>
                    <div className="select-box">
                        <div className="small-box"></div>
                    </div>

                </div>
                <div className="dine-in-right">
                    <img src="/icons/arrow-down-s-line.png" alt=""/>
                    <span>Dine In</span>
                </div>
            </div>
            <div className="food-cards">
                <div className="food-cards-child">
                    <img src="/icons/eat1.png" alt=""/>
                    <span>Spicy seasoned seafood noodles</span>
                    <p>$ 2.29</p>
                    <span>20 Bowls available</span>
                </div>
                <div className="food-cards-child">
                    <img src="/icons/eat1.png" alt=""/>
                    <span>Spicy seasoned seafood noodles</span>
                    <p>$ 2.29</p>
                    <span>20 Bowls available</span>
                </div>
                <div className="food-cards-child">
                    <img src="/icons/eat1.png" alt=""/>
                    <span>Spicy seasoned seafood noodles</span>
                    <p>$ 2.29</p>
                    <span>20 Bowls available</span>
                </div>
                <div className="food-cards-child">
                    <img src="/icons/eat1.png" alt=""/>
                    <span>Spicy seasoned seafood noodles</span>
                    <p>$ 2.29</p>
                    <span>20 Bowls available</span>
                </div>
                <div className="food-cards-child">
                    <img src="/icons/eat1.png" alt=""/>
                    <span>Spicy seasoned seafood noodles</span>
                    <p>$ 2.29</p>
                    <span>20 Bowls available</span>
                </div>
                <div className="food-cards-child">
                    <img src="/icons/eat1.png" alt=""/>
                    <span>Spicy seasoned seafood noodles</span>
                    <p>$ 2.29</p>
                    <span>20 Bowls available</span>
                </div>
                <div className="food-cards-child">
                    <img src="/icons/eat1.png" alt=""/>
                    <span>Spicy seasoned seafood noodles</span>
                    <p>$ 2.29</p>
                    <span>20 Bowls available</span>
                </div>
                <div className="food-cards-child">
                    <img src="/icons/eat1.png" alt=""/>
                    <span>Spicy seasoned seafood noodles</span>
                    <p>$ 2.29</p>
                    <span>20 Bowls available</span>
                </div>
            </div>
        </div>
    );
};

export default MiddleCard;