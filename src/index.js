import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter} from "react-router-dom";

import App from "./App";
//import * as serviceWorker from "./serviceWorker";

ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root")
);

//serviceWorker.unregister();
