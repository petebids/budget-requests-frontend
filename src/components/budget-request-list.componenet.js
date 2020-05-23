import React, {Component} from "react";
import BudgetRequestDataService from "../service/budget-request.service";
import {Link } from "react-router-dom";


/*
http://jsbin.com/xabutim/edit?html,output
https://stackoverflow.com/questions/45958356/how-to-make-the-api-call-and-display-it-in-react-js-using-react-table-and-axios

*/

export default class BudgetRequestList extends Component{
    constructor(props){
        super(props);
        //this.refreshList = this.refreshList.bind(this);
        this.retrieveBudgetRequests = this.retrieveBudgetRequests.bind(this);



        this.state = {
            currentBudgetRequest :null,
            currentindex :-1,

            budgetRequests :[{
                id:null,
                createdDate:"",
                allocationDate:"",
                finYear:"",
                projectCode : "", 
                projectType : "", 
                projectBudget: null, 
                costCentre: "", 
                branchNumber: "" ,
                fibreProjectManager: "",
                state: "",
                requestor: ""
            }

            ]
        };
    }

    setActiveBudgetRequest(br , idx)
    {this.setState({
        currentBudgetRequest : br,
        index : idx
    });

    }
        async componentDidMount(){
            await this.retrieveBudgetRequests();
        }

        async retrieveBudgetRequests() {
            try {
                const response = await BudgetRequestDataService.getAll();
                this.setState({
                    budgetRequests : response.data
                });
                console.log(response.data);
            }
            catch(err){
                console.log(err);
            }


        }
        render() {
            const {  budgetRequests, currentBudgetRequest, currentIndex } = this.state;
        
            return (
              <div className="list row">
                <div className="col-md-6">
                  <h4>All Requests</h4>
        
                  <ul className="list-group">
                    {budgetRequests &&
                      budgetRequests.map((br, index) => (
                        <li
                          className={
                            "list-group-item " +
                            (index === currentIndex ? "active" : "")
                          }
                          onClick={() => this.setActiveBudgetRequest(br, index)}
                          key={index}
                        >
                          {br.id}
                        </li>
                      ))}
                  </ul>
        

                </div>
                <div className="col-md-6">
                  {currentBudgetRequest ? (
                    <div>
                      <h4>Budget Request</h4>
                      <Link
                to={"/budgetrequest/" + currentBudgetRequest.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
                      <div>
                        <label>
                          <strong>Id:</strong>
                        </label>{" "}
                        {currentBudgetRequest.id}
                      </div>
                      <div>
                        <label>
                          <strong>Created:</strong>
                        </label>{" "}
                        {currentBudgetRequest.createdDate}
                      </div>
                      <div>
                        <label>
                          <strong>Allocation Date:</strong>
                        </label>{" "}
                        {currentBudgetRequest.allocationDate}
                      </div>
                      <div>
                        <label>
                          <strong>Financial year:</strong>
                        </label>{" "}
                        {currentBudgetRequest.finYear}
                      </div>
                      <div>
                        <label>
                          <strong>Project Code:</strong>
                        </label>{" "}
                        {currentBudgetRequest.projectCode}
                      </div>
                      <div>
                        <label>
                          <strong>Project Code:</strong>
                        </label>{" "}
                        {currentBudgetRequest.projectCode}
                      </div>
                      <div>
                        <label>
                          <strong>Project Type:</strong>
                        </label>{" "}
                        {currentBudgetRequest.projectType}
                      </div>
                      <div>
                        <label>
                          <strong>Project Budget:</strong>
                        </label>{" "}
                        {currentBudgetRequest.projectBudget}
                      </div>
                      <div>
                        <label>
                          <strong>Cost Centre:</strong>
                        </label>{" "}
                        {currentBudgetRequest.costCentre}
                      </div>
                      <div>
                        <label>
                          <strong>Branch Number:</strong>
                        </label>{" "}
                        {currentBudgetRequest.branchNumber}
                      </div>
                      <div>
                        <label>
                          <strong>Fibre PM:</strong>
                        </label>{" "}
                        {currentBudgetRequest.fibreProjectManager}
                      </div>
                      <div>
                        <label>
                          <strong>State :</strong>
                        </label>{" "}
                        {currentBudgetRequest.state}
                      </div>
                      <div>
                        <label>
                          <strong>Requestor :</strong>
                        </label>{" "}
                        {currentBudgetRequest.requestor}
                      </div>


                    </div>
                  ) : (
                    <div>
                      <br />
                      <p>Please click on a Budget Request...</p>
                    </div>
                  )}
                </div>
              </div>
            );
          }
        }
