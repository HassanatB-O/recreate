function callAjax(){
    // Creating the XMLHttpRequest object
    var request = new XMLHttpRequest();
    // Instantiating the request object
    request.open("GET", "https://opentdb.com/api.php?amount=10&type=boolean");
    // Defining event listener for readystatechange event
    request.onreadystatechange = function() {
        // Check if the request is complete and was successful
        if (this.readyState === 4 && this.status === 200){
            //Inserting the response from server into an HTML element 
            document.getElementById('result').innerHTML = this.responseText;
        }
    };
    // Sending the request to the server
    request.send();
}

