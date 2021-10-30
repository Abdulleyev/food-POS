import React from 'react';
import Sidebar from "./Sidebar";
import MiddleCard from "./MiddleCard";
import RightCard from "./RightCard";

const Main = () => {
    return (
        <div className="main">
            <Sidebar/>
            <MiddleCard/>
            <RightCard/>
        </div>
    );
};

export default Main;