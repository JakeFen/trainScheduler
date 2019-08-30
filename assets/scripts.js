$(document).ready(function() {
      firebase.initializeApp(firebaseConfig);
      
      var database = firebase.database();

      var trCount = 0;

      $("button").on("click", function(event) {
        event.preventDefault();

        // gets value of info from Form 
        // console.log it
        var trainName = $("#trainName").val().trim();
        var formDestination = $("#formDestination").val().trim();
        var trainTime = $("#trainTime").val().trim();
        var formFrequency = $("#formFrequency").val().trim();

        var newTrain = {
            train: trainName,
            destination: formDestination,
            time: trainTime,
            frequency: formFrequency
        }

        database.ref().push(newTrain);
        
        console.log(newTrain.train);
        console.log(newTrain.destination);
        console.log(newTrain.time);
        console.log(newTrain.frequency);

        $("#trainName").val("");
        $("#formDestination").val("");
        $("#trainTime").val("");
        $("#formFrequency").val("");
      })

      database.ref().on("child_added", function(childSnapshot){
        console.log(childSnapshot);

        var trainName = childSnapshot.val().train;
        var formDestination = childSnapshot.val().destination;
        var trainTime = childSnapshot.val().time;
        var formFrequency = childSnapshot.val().frequency;

        console.log(trainName)
        console.log(formDestination)
        console.log(trainTime)
        console.log(formFrequency)

        // var currentTime = ;
        // var minAway = ;

        var newRow = $("<tr>").append(
            $("<td>").text(trainName),
            $("<td>").text(formDestination),
            $("<td>").text(formFrequency),
            $("<td>").text(""),
            $("<td>").text("")
        );

        $("tbody").append(newRow);
      })
}) 
