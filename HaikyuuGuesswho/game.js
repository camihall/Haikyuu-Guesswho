



//flip card
var image_tracker = 'notPotato';
function flip(id, face){
    var image = document.getElementById(id);
    if(image_tracker == 'potato'){
        image.src = face;
        image_tracker = 'notPotato';
    } else {
        image.src = "img/potato.jpg";
        image_tracker = 'potato';
    }
}

// Game Tracker
var win = 0;
var loss = 0;


// Reset Game Board
