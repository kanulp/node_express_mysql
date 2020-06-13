module.exports = app => {
    const Corona_cases = require("../controllers/customer.controller.js");

    // Create a new Customer
    app.post("/coronacases", Corona_cases.create);

    // Retrieve all Corona_cases
    app.get("/coronacases", Corona_cases.findAll);

    // Retrieve a single Customer with customerId
    app.get("/coronacases/:caseId", Corona_cases.findOne);

    // Update a case with caseId
    app.put("/coronacases/:caseId", Corona_cases.update);

    app.delete("/coronacases/:caseId", Corona_cases.delete);

    app.delete("/coronacases", Corona_cases.deleteAll);
};