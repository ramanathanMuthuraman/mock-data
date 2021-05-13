const express = require("express");
const faker = require("faker");
const cors = require("cors");
const _ = require("lodash");

const app = express();

app.use(cors());

app.post("/auth", (req, res) => {
  setTimeout(() => {
    res.send({
      token:
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYxNzQzNzM5NywiaWF0IjoxNjE3MzUwOTk3fQ.s2Pb6XsfMTCoa-q7g1Py3vm9K2vVyVb2SuBnIctGvv5XqoThhDOvO8YTnU1IS4F-qN4rI4BwcaVdIG9wW9JmMA",
      tokenExpiryTime: 86400,
      user: {
        userName: "admin",
        email: "admin@gmail.com",
        empId: "-1",
        roleName: "USER",
        phoneNumber: null,
        modules: ["FM", "UM", "AM", "CRA"],
      },
    });
  }, 2000);
});

app.get("/alert", (req, res) => {
  setTimeout(() => {
    res.send(require("./mock/alerts.json"));
  }, 2000);
});

app.get("/cra", (req, res) => {
  setTimeout(() => {
    res.send(require("./mock/cra.json"));
  }, 2000);
});

app.get("/alert/user", (req, res) => {
  setTimeout(() => {
    res.send(require("./mock/assignedAlerts.json"));
  }, 2000);
});

app.get("/alert/customerId", (req, res) => {
  setTimeout(() => {
    res.send(require("./mock/customerId.json"));
  }, 2000);
});

app.get("/alert/customer", (req, res) => {
  setTimeout(() => {
    res.send(require("./mock/alertsSpecificToCustomerId.json"));
  }, 2000);
});

app.put("/alert", (req, res) => {
  setTimeout(() => {
    res.send({ message: "success" });
  }, 2000);
});

app.post("/alert/:user/assign", (req, res) => {
  setTimeout(() => {
    res.send({ message: "success" });
  }, 2000);
});

app.get("/user", (req, res) => {
  setTimeout(() => {
    res.send(require("./mock/user.json"));
  }, 2000);
});

app.post("/user", (req, res) => {
  setTimeout(() => {
    res.send({ message: "success" });
  }, 2000);
});

app.put("/user/changepassword", (req, res) => {
  setTimeout(() => {
    res.send(true);
  }, 2000);
});

app.listen(8080, () => {
  console.log("server started on port 8080");
});
