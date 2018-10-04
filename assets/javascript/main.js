/*
*pseudocode:
    - create a database
    - initialize database in js
    - create .on("click") event to update html
    - store user information in variables
    - push the user information into database using .push method

    
    - create another function to retrieve data from the database using .on("child_added")
    - create function to retrieve data for # months worked vs. monthly rate 
        - return object with properties #months worked and monthly rate (variables)
          for all employees

    -create function to retrieve data for employee role vs. billed average
       - return object with properties of employee role and billed average
       - create an array of objects holding employee roles, total billing, and number of employees
       -[{"role": "CBO", "totalbill": 100000, "totalnum": 100},...]

*/


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDutMIS_CK4gRtoLg_BvR4SRZ6sYRTf6kw",
    authDomain: "employee-data-management-b7225.firebaseapp.com",
    databaseURL: "https://employee-data-management-b7225.firebaseio.com",
    projectId: "employee-data-management-b7225",
    storageBucket: "employee-data-management-b7225.appspot.com",
    messagingSenderId: "598544743886"
  };
  firebase.initializeApp(config);

var database = firebase.database();


$("#Submit").on("click", function(event) {
    event.preventDefault();
    var employeeName = $("#employee-name").val();
    console.log(employeeName);
    var role = $("#role").val();
    console.log(role);
    var startDate = $("#start-date").val();
    console.log(startDate);
    var monthsWorked = $("#months-worked").val();
    console.log(monthsWorked);
    var monthlyRate = $("#monthly-rate").val();
    console.log(monthlyRate);
    var totalBilled = monthlyRate * monthsWorked;
    console.log(totalBilled);
    
    var data = {
        "employeeName": employeeName,
        "role": role,
        "startDate": startDate,
        "monthsWorked": monthsWorked,
        "monthlyRate": monthlyRate,
        "totalBilled": totalBilled
    }

    database.ref().push(data);
});


database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());
    console.log("done");
})
