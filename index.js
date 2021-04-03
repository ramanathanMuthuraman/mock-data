const express = require("express");
const faker = require("faker");
const _ = require("lodash");

const app = express();

app.post("/auth", (req, res) => {
  res.send({
    token:
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYxNzQzNzM5NywiaWF0IjoxNjE3MzUwOTk3fQ.s2Pb6XsfMTCoa-q7g1Py3vm9K2vVyVb2SuBnIctGvv5XqoThhDOvO8YTnU1IS4F-qN4rI4BwcaVdIG9wW9JmMA",
    tokenExpiryTime: 86400,
    user: {
      userName: "admin",
      email: "admin@gmail.com",
      empId: "-1",
      roleName: "SUPER_ADMIN",
      phoneNumber: null,
      modules: ["FM", "UM", "AM", "CRA"],
    },
  });
});

app.get("/auth", (req, res) => {
  res.send({
    token:
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYxNzQzNzM5NywiaWF0IjoxNjE3MzUwOTk3fQ.s2Pb6XsfMTCoa-q7g1Py3vm9K2vVyVb2SuBnIctGvv5XqoThhDOvO8YTnU1IS4F-qN4rI4BwcaVdIG9wW9JmMA",
    tokenExpiryTime: 86400,
    user: {
      userName: "admin",
      email: "admin@gmail.com",
      empId: "-1",
      role: "SUPER_ADMIN",
      phoneNumber: null,
      modules: ["FM", "UM", "AM", "CRA"],
    },
  });
});

app.listen(8080, () => {
  console.log("server started on port 8080");
});
