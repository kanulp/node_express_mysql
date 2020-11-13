module.exports = app => {
    const Corona_cases = require("../controllers/customer.controller.js");

    app.post("/coronacases", Corona_cases.create);

    app.get("/coronacases", Corona_cases.findAll);

    app.get("/coronacases/:caseId", Corona_cases.findOne);

    app.put("/coronacases/:caseId", Corona_cases.update);

    app.delete("/coronacases/:caseId", Corona_cases.delete);

    app.delete("/coronacases", Corona_cases.deleteAll);
};