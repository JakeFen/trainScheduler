console.log(apiKey)
$(document).ready(function() {
    var firebaseConfig = {
        apiKey: apiKey,
        authDomain: "trainscheduler-64ee7.firebaseapp.com",
        databaseURL: "https://trainscheduler-64ee7.firebaseio.com",
        projectId: "trainscheduler-64ee7",
        storageBucket: "",
        messagingSenderId: "786925156466",
        appId: "1:786925156466:web:e2f84db3df46fc3d"
      };
    
      firebase.initializeApp(firebaseConfig);
}) 
