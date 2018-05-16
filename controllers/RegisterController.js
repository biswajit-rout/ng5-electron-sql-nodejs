var dbContext = require('../db/dbContext');
class RegisterController extends dbContext{
    constructor(){
        super();
        this.dbRegister = this.dbConnection;
        this.disconnect();
        this.val = "biswajit";
        
    }

}
module.exports = RegisterController;