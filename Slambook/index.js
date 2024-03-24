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
    
       let contactName = document.querySelector('input[name="contactName"]').value;
    let relationship = document.querySelector('input[name="relationship"]').value;
    let likeInMe = document.querySelector('input[name="likeInMe"]').value;
    let hateInMe = document.querySelector('input[name="hateInMe"]').value;
    let deadReaction = document.querySelector('input[name="deadReaction"]').value;
    let firstImpression = document.querySelector('input[name="firstImpression"]').value;
    let beautifulMessage = document.querySelector('input[name="beautifulMessage"]').value;
    let nickname = document.querySelector('input[name="nickname"]').value;
    let songForMe = document.querySelector('input[name="songForMe"]').value;
    let shareOpinion = document.querySelector('input[name="shareOpinion"]').value;



    })
//Write your code above

function showSlamList(){
//Update the function here
     
// Write your code above this line
}

showSlamList();