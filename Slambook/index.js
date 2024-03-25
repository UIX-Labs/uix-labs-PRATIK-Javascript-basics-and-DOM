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

     if (contactName.value === "") {
        setError(contactName);
        return;
    }
    if (relationship.value === "") {
        setError(relationship);
        return;
    }
    if (likeInMe.value === "") {
        setError(likeInMe);
        return;
    }
    if (hateInMe.value === "") {
        setError(hateInMe);
        return;
    }
    if (deadReaction.value === "") {
        setError(deadReaction);
        return;
    }
    if (firstImpression.value === "") {
        setError(firstImpression);
        return;
    }
    if (beautifulMessage.value === "") {
        setError(beautifulMessage);
        return;
    }
    if (nickname.value === "") {
        setError(nickname);
        return;
    }
    if (songForMe.value === "") {
        setError(songForMe);
        return;
    }
    if (shareOpinion.value === "") {
        setError(shareOpinion);
        return;
    }

    // If all inputs are filled, proceed with form submission

    // Create empty formValues object
    let formValues = {};

    // Store input values in formValues object
    formValues.contactName = contactName.value;
    formValues.relationship = relationship.value;
    formValues.likeInMe = likeInMe.value;
    formValues.hateInMe = hateInMe.value;
    formValues.deadReaction = deadReaction.value;
    formValues.firstImpression = firstImpression.value;
    formValues.beautifulMessage = beautifulMessage.value;
    formValues.nickname = nickname.value;
    formValues.songForMe = songForMe.value;
    formValues.shareOpinion = shareOpinion.value;

    // Log formValues object to console
    console.log("formValues object:", formValues);

    // Add formValues object to allSlamArray
    allSlamArray.push(formValues);

    // Log allSlamArray to console
    console.log("allSlamArray:", allSlamArray);

    // Reset form after submission
    form.reset();
});

// Function to set error for empty input
function setError(inputElement) {
    inputElement.style.border = '2px solid red'; // Change border color to red
    let errorMessageSpan = document.createElement('span'); // Create span element
    errorMessageSpan.textContent = 'Error: The text is required'; // Set error message
    inputElement.after(errorMessageSpan); // Add error message after input element
}


//Write your code above

function showSlamList(){
//Update the function here
     
// Write your code above this line
}

showSlamList();