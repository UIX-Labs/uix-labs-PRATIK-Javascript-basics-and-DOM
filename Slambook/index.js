let form;
let allSlamArray=[];
//Write code below to select the form element
form = document.getElementsByTagName('form')[0];
// Write your code above
console.log(form,"form");

// Add the evenlistner below
document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Log to console when submit event occurs
    console.log("I am inside submit");
    
    
    let contactName = document.querySelector('input[name="contactName"]');
    let relationship = document.querySelector('input[name="relationship"]');
    let likeInMe = document.querySelector('input[name="likeInMe"]');
    let hateInMe = document.querySelector('input[name="hateInMe"]');
    let deadReaction = document.querySelector('input[name="deadReaction"]');
    let firstImpression = document.querySelector('input[name="firstImpression"]');
    let beautifulMessage = document.querySelector('input[name="beautifulMessage"]');
    let nickname = document.querySelector('input[name="nickname"]');
    let songForMe = document.querySelector('input[name="songForMe"]');
    let shareOpinion = document.querySelector('input[name="shareOpinion"]');


    })
//Write your code above

function showSlamList(){
//Update the function here
     
// Write your code above this line
}

showSlamList();