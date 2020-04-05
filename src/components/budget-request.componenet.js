import React, {Component} from "react";
import BudgetRequestDataService from "../service/budget-request.service";

export default class BudgetRequestComponent extends Component{
    constructor(props){
        super(props);
        this.getBudgetRequest = this.getBudgetRequest.bind(this);
       /* this.updateBudgetRequest = this.updateBudgetRequest.bind(this);*/


        this.state={
            currentBudgetRequest:{
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
        };
    }

        componentDidMount(){
            this.getBudgetRequest(this.props.match.params.id);
        }



        getBudgetRequest(id){
            BudgetRequestDataService.get(id)
            .then(response => {
                this.setState({
                    currentBudgetRequest :response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        }   

        render(){
            const {currentBudgetRequest } = this.state;

            return(

                        <div className="edit-form">
                            <h4>Budget Request</h4>
                            
                                <div className="form-group">
                                    <label htmlFor="id">ID: </label>
                                    <input readonly
                                    value{...currentBudgetRequest.id}
                                    
                                        />
                                </div>
                            
                        </div>
                        );
        }
        }
