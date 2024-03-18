const ratingContainer = document.querySelector(".cardContainer");
const thankYouContainer = document.querySelector(".thankYouState");

const submit = document.getElementById("submit-btn");
const rating = document.getElementById("ratingNumber");
const rates = document.querySelectorAll(".btn");
// console.log(thankYouContainer.classList)

submit.addEventListener("click", () => {
    if(rating.innerHTML > 0){
        thankYouContainer.classList.remove("hidden");
    ratingContainer.classList.add("hidden");
    console.log("me apachuraste pedrito")
    // console.log(thankYouContainer.classList)
    } else {
        alert("Choose a valid rating before submit please")
    }
    
})


rates.forEach((rate) =>{
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
          // Remover la clase 'selected' de todos los botones
          rates.forEach(btn => btn.classList.remove('selected'));
          // Agregar la clase 'selected' al botón clickeado
          rate.classList.add('selected');
    })
})

