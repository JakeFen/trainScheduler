$(document).ready(function() {
      firebase.initializeApp(firebaseConfig);
      
      var trCount = 0;

      $("button").on("click", function(event) {
        event.preventDefault();

        // gets value of info from Form 
        // console.log it
        var trainName = $("#trainName").val().trim();
        var formDestination = $("#formDestination").val().trim();
        var trainTime = $("#trainTime").val().trim();
        var formFrequency = $("#formFrequency").val().trim();
        console.log(trainName);
        console.log(formDestination);
        console.log(trainTime);
        console.log(formFrequency);

        var newTR = $("<tr class='" + trCount + "'>")
        $("tbody").append($(newTR));
        for(var i = 0; i < 5; i++) {
            newTR.append($("<td>"))
        };

      })
}) 
