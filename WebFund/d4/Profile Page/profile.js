// on click of edit profile anchor, change name
function changeName(element){
    document.querySelector("#name").innerHTML = "Rick Flair";
    document.querySelector("#Rick").src = "images/Rick_Flair.jpg";
}


// remove requestor from list and add 1 to total connections
function connAdd(element){
    var requestor = document.querySelector(element);
    requestor.remove();
    document.querySelector("#totalConn").innerHTML++;
}

// remove requestor from list and subtract 1 from total connections
function connRemove(element){
    var requestor = document.querySelector(element);
    requestor.remove();
    document.querySelector("#totalConn").innerHTML--;
}

