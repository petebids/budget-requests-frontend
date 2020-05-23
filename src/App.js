import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import AddBudgetRequest from "./components/add-budget-request.component";
import BudgetRequest from "./components/budget-request.componenet";
import BudgetRequestList from "./components/budget-request-list.componenet";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <a href="/budgetrequests" className="navbar-brand">
                            Budget Request Tracker
                        </a>
                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={"/budgetrequests"} className="nav-link">
                                    Budget Requests
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/add"} className="nav-link">
                                    Add
                                </Link>
                            </li>
                        </div>
                    </nav>


                    <div className="contianer mt-3">
                        <Switch>
                            <Route exact path={["/", "/budgetrequests"]} component={BudgetRequestList} />
                            <Route exact path="/add" component={AddBudgetRequest} />
                            <Route path="/budgetrequest/:id" component={BudgetRequest} />
                        </Switch>
                    </div>
                </div>
            </Router>

        );
    }
};

export default App;
