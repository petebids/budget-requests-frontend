import React, { Component } from "react";
import BudgetRequestDataService from "../service/budget-request.service";

export default class BudgetRequestComponent extends Component {
  constructor(props) {
    super(props);
    this.getBudgetRequest = this.getBudgetRequest.bind(this);
    /*this.updateBudgetRequest = this.updateBudgetRequest.bind(this);*/
    this.inputChangeHandler = this.inputChangeHandler.bind(this);



    this.state = {
      currentBudgetRequest: {
        id: null,
        createdDate: "",
        allocationDate: "",
        finYear: "",
        projectCode: "",
        projectType: "",
        projectBudget: null,
        costCentre: "",
        branchNumber: "",
        fibreProjectManager: "",
        state: "",
        requestor: ""
      }
    };
  }
  inputChangeHandler(e) {
    let formFields = { ...this.state.formFields };
    formFields[e.target.name] = e.target.value;
    this.setState({
      formFields
    });
  }

  componentDidMount() {
    this.getBudgetRequest(this.props.match.params.id);
  }



  getBudgetRequest(id) {
    BudgetRequestDataService.get(id)
      .then(response => {
        this.setState({
          currentBudgetRequest: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  async getBudgetRequest2(id) {
    try {
      const response = await BudgetRequestDataService.get(id);
      this.setState({ currentBudgetRequest: response.data });
      console.log(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  render() {
    const { currentBudgetRequest } = this.state;

    return (
      <div>
        <div className="edit-form">
          <h4>Budget Request</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Branch Number</label>
              <input
                type="text"
                className="form-control"
                id="branchNumber"
                required
                value={this.state.branchNumber}
                name="branchNumber"
                onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.currentBudgetRequest.branchNumber}
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
                onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.currentBudgetRequest.costCentre}
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
                  onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.currentBudgetRequest.fibreProjectManager}
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
                  onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.currentBudgetRequest.projectBudget}
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
                  onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.currentBudgetRequest.projectCode}
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
                  onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.currentBudgetRequest.projectType}
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
                  onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.currentBudgetRequest.requestor}
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
                  onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.currentBudgetRequest.state}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}