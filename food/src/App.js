
import {BrowserRouter, Switch ,Route} from "react-router-dom";
import React from "react";
import Main from "./pages/Main";

function App() {
    return (
        <div>
           <BrowserRouter>
               <Switch>
                   <Route path="/" exact component={Main}/>
               </Switch>
           </BrowserRouter>
        </div>
    );
}

export default App;
