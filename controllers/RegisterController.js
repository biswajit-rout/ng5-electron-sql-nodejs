var dbContext = require('../db/dbContext');
class RegisterController extends dbContext{
    constructor(req, res, next){
        super();
        this.dbRegister = this.dbConnection;
        this.res = res;
        //this.disconnect();
        this.val = "biswajit";
        this.getUsersData(res);
    }
    getUsersData(res){
        this.dbConnection.query("SELECT * FROM `user_data`",function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', fields);
            res.send({data:results[0].name});
          });
    }

}
module.exports = RegisterController;