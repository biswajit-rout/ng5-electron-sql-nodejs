var dbContext = require('../db/dbContext');
class RegisterController extends dbContext{
    constructor(){
        super();
        this.dbRegister = this.dbConnection;
        this.disconnect();
        
    }

}
module.exports = RegisterController;