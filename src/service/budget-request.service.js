import http from "../http-common";

class BudgetRequestDataService{
    getAll(){
        return http.get(`http://127.0.0.1:8080/api/budgetrequest/`);
    }
    get(id){
        return http.get(`http://127.0.0.1:8080/api/budgetrequest/${id}`);
    }
    create(data){
        return http.post(`http://127.0.0.1:8080/api/budgetrequest/`, data);
    }

}
export default new BudgetRequestDataService();