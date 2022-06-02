const ratingLabels = document.querySelectorAll("label")
const submitBtn  = document.querySelector("input[type='button']")
const sections = document.querySelectorAll("section")
const ratingInfo = document.querySelector(".rating-value-informator")

changeShownRating(1)

ratingLabels.forEach(ratingLabel => 
    ratingLabel.addEventListener("click", updateRadio)
);

submitBtn.addEventListener("click", displayAcknowledgement)



function updateRadio(){
    ratingLabels.forEach((ratingLable,index)=>{
        ratingLable.classList.value = "rating-label"
        var rating = ratingLable.querySelector("input")

        if(rating.checked){
            ratingLable.classList.add("checked")
            changeShownRating(index+1)
        }
})
}

function displayAcknowledgement(){
    sectionsHiddingToggle()
    setTimeout(sectionsHiddingToggle, 2000)
}

function sectionsHiddingToggle(){
    sections[0].classList.toggle('hidden')
    sections[1].classList.toggle('hidden')
}

function changeShownRating(new_rating){
    const template = `You seleted ${new_rating} out of 5`
    ratingInfo.innerText = template;
}