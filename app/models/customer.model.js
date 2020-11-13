const sql = require("./db.js");

// constructor
const Corona_cases = function(Corona_cases) {
    //this.id = Corona_cases.id;
    this.name = Corona_cases.name;
    this.email = Corona_cases.email;
    this.positive = Corona_cases.positive;
    this.address = Corona_cases.address;
};

Corona_cases.create = (newCorona_case, result) => {
    sql.query("INSERT INTO Corona_cases SET ?", newCorona_case, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Created Corona_case : ", { id: res.insertId, ...newCorona_case });
        result(null, { id: res.insertId, ...newCorona_case });
    });
};

Corona_cases.findById = (caseId, result) => {
    sql.query(`SELECT * FROM Corona_cases WHERE id = ${caseId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found case: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

Corona_cases.getAll = result => {
    sql.query("SELECT * FROM Corona_cases", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Corona_cases: ", res);
        result(null, res);
    });
};

Corona_cases.updateById = (id, Corona_cases, result) => {
    sql.query(
        "UPDATE Corona_cases SET name = ?, email = ? , positive = ? , address = ? WHERE id = ?", [Corona_cases.name, Corona_cases.email, Corona_cases.positive, Corona_cases.address, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Corona_cases with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated Corona_cases: ", { id: id, ...Corona_cases });
            result(null, { id: id, ...Corona_cases });
        }
    );
};

Corona_cases.remove = (id, result) => {
    sql.query("DELETE FROM Corona_cases WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted Corona_case with id: ", id);
        result(null, res);
    });
};

Corona_cases.removeAll = result => {
    sql.query("DELETE FROM Corona_cases", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} Corona_cases`);
        result(null, res);
    });
};

module.exports = Corona_cases;