const ratingLabels = document.querySelectorAll("label")

ratingLabels.forEach(ratingLabel => 
    ratingLabel.addEventListener("click", updateRadio)
    
);


function updateRadio(){
    ratingLabels.forEach((ratingLable,index)=>{
        ratingLable.classList.remove("checked")
        var rating = ratingLable.querySelector("input")

        if(rating.checked){
            console.log(index)
            ratingLable.classList.add("checked")
        }
})
}