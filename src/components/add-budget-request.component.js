import React, {Component} from "react";
import BudgetRequestDataService from "../service/budget-request.service";


export default class AddBudgetRequest extends Component{
    constructor(props){
        super(props);
        this.retrieveBudgetRequests = this.retrieveBudgetRequests.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveBudgetRequest = this.setActiveBudgetRequest.bind(this);

        this.state= {
            budgetRequests : [],
            currentBudgetRequest : null,
            currentIndex :-1,

        };

    }

    componentDidMount(){
        this.retrieveBudgetRequests();
    }

    retrieveBudgetRequests(){
        BudgetRequestDataService.getAll()
            .then(response =>{
                this.setState({
                    budgetRequests :response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    
    refreshList(){
        this.retrieveBudgetRequests();
        this.setState({
            currentBudgetRequest : null,
            currentIndex : -1
        });
    }

    setActiveBudgetRequest(budgetRequest, index){
        this.setState({
            currentBudgetRequest: budgetRequest,
            currentIndex : index
        });
    }

    render() {
        return (
          <div className="submit-form">
            {this.state.submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={this.newTutorial}>
                  Add
                </button>
              </div>
            ) : (
              <div>
                <div className="form-group">
                  <label htmlFor="title">Project Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="projectCode"
                    required
                    value={this.state.projectCode}
                    name="projectCode"
                  />
                </div>
    
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    required
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    name="description"
                  />
                </div>
    
                <button onClick={this.saveTutorial} className="btn btn-success">
                  Submit
                </button>
              </div>
            )}
          </div>
        );
      }
    }