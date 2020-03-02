const path = require('path')
const express = require('express')
const app = express()
app.get('/', function(req, res) {
    const plotly = require('plotly')("clarido.christianbryllevon", "7bUQC9n7EvXHWsnzC4An");

    var foodExpense = {
    x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    y: [80, 75, 100, 85, 90, 70,70],
    name: "Food Expenses",
    type: "bar"
    };

    var transportationExpense = {
        x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        y: [20, 30, 20, 30, 20, 30, 20],
        name: "Tranportation Expenses",
        type: "bar"
    };

    var savings = {
        x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        y: [20, 20, 20, 30, 20, 30, 30],
        name: "Savings",
        type: "bar"
    };

    var data = [foodExpense, transportationExpense, savings];
    var layout = {barmode: "group"};
    var graphOptions = {layout: layout, filename: "grouped-bar", fileopt: "overwrite"};

    plotly.plot(data, graphOptions, function (err, msg) {
        console.log(msg.url);
        res.end(`<a href="${msg.url}">Weekly Expenses</a>`);
    });
});

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log('Server is running on ${PORT}')
// My Data visualtion



