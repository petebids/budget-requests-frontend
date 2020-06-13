import React, {Component} from "react";
import BudgetRequestDataService from "../service/budget-request.service";
import { Link } from "react-router-dom";



export default class AddBudgetRequest extends Component{
    constructor(props){
        super(props);
        this.createBudgetRequest = this.createBudgetRequest.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.newBudgetRequest = this.newBudgetRequest.bind(this);
        this.state= {
          submitted: false,
          linkValue :null,
          formFields:{
            projectCode : "", 
            projectType : "", 
            projectBudget: 1000, 
            costCentre: "", 
            branchNumber: "" ,
            fibreProjectManager: "",
            state: "",
            requestor: ""
          }
        }
      };
    inputChangeHandler(e) {
      let formFields = {...this.state.formFields};
      formFields[e.target.name] = e.target.value;
      this.setState({
        formFields
      });
      }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
    newBudgetRequest(){
      this.setState=( {
        submitted: false,
        formFields:{
          projectCode : "", 
          projectType : "", 
          projectBudget: null, 
          costCentre: "", 
          branchNumber: "" ,
          fibreProjectManager: "",
          state: "",
          requestor: ""
        }
        });
    }

    createBudgetRequest(){

      var data={
        branchNumber : this.state.formFields.branchNumber,
        costCentre : this.state.formFields.costCentre, 
        fibreProjectManager : this.state.formFields.fibreProjectManager,
        projectBudget : this.state.formFields.projectBudget,
        projectType : this.state.formFields.projectType, 
        projectCode : this.state.formFields.projectCode, 
        requestor : this.state.formFields.requestor,
        state :  this.state.formFields.state

      };
      console.log(data);
      BudgetRequestDataService.create(data)
        .then(response =>{
          this.setState({
            id : response.data.id,
            createdDate : response.data.createdDate,
            projectCode : response.data.projectCode,
            projectType : response.data.projectType,
            projectBudget : response.data.projectBudget,
            costCentre : response.data.costCentre,
            branchNumber : response.data.branchNumber,
            allocationDate : response.data.allocationDate,
            finYear : response.data.finYear,
            fibreProjectManager : response.data.fibreProjectManager,
            state : response.data.state,
            requestor : response.data.requestor,
            submitted: true
            
          });
        })
    }

    render() {
        return (
          <div className="submit-form">
            {this.state.submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <Link
                to={"/budgetrequest/" + this.state.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
              </div>
            ) : (
              <div>
              <div className="form-group">
                <label htmlFor="title">Branch Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="branchNumber"
                  required
                  value={this.state.branchNumber}
                  name="branchNumber"
                  onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.branchNumber} 
                />
              </div>

              <div className="form-group">
                <label htmlFor="title">Cost Centre</label>
                <input
                  type="text"
                  className="form-control"
                  id="costCentre"
                  required
                  value={this.state.costCentre}
                  name="costCentre"
                  onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.costCentre} 
                />
              </div>

              <div>
                <div className="form-group">
                  <label htmlFor="title">Fibre PM</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fibreProjectManager"
                    required
                    value={this.state.fibreProjectManager}
                    name="fibreProjectManager"
                    onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.fibreProjectManager} 
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="title">Project Budget</label>
                  <input
                    type="text"
                    className="form-control"
                    id="projectBudget"
                    required
                    value={this.state.projectBudget}
                    name="projectBudget"
                    onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.projectBudget} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="title">Project Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="projectCode"
                    required
                    value={this.state.projectCode}
                    name="projectCode"
                    onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.projectCode} 
                    />
                </div>
                <div className="form-group">
                  <label htmlFor="title">Project Type </label>
                  <input
                    type="text"
                    className="form-control"
                    id="projectType"
                    required
                    value={this.state.projectType}
                    name="projectType"
                    onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.projectType} 
                    />
                </div>

                <div className="form-group">
                  <label htmlFor="title">Requestor</label>
                  <input
                    type="text"
                    className="form-control"
                    id="requestor"
                    required
                    value={this.state.requestor}
                    name="requestor"
                    onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.requestor} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="title">State</label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    required
                    value={this.state.requestor}
                    name="state"
                    onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.state} 
                  />
                </div>
                </div>
    
                <button onClick={this.createBudgetRequest} className="btn btn-success">
                  Submit
                </button>
              </div>
            )}
          </div>
        );
      }
    }