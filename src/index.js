document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()
    
    
})

// STEP 2: ADD PUPS TO DOG BAR
function fetchDogs() {
    const divWithDogs = document.getElementById("dog-bar")
    console.log(divWithDogs)
    fetch("http://localhost:3000/pups")
        .then(res => res.json())
        .then(dogs => dogs.forEach(dog => {
            const spanDog = document.createElement("span")
            spanDog.textContent = dog.name
            divWithDogs.append(spanDog)

            spanDog.addEventListener("click", (e) => {
                infoAboutDog(dog)
            })
    
        }))
}

// Step 3 SHOW MORE INFO ABOUT EACH PUP
function infoAboutDog(dog) {

        const dogInfo = document.getElementById("dog-info")


        const img = document.createElement("img")
        img.src = dog.image
        const h2 = document.createElement("h2")
        h2.textContent = dog.name
        const button = document.createElement("button")
        button.textContent = dog.isGoodDog
            if (dog.isGoodDog === true) {
                button.textContent = "Good Boy"
            } else {
                button.textContent = "Bad boy"
            }
         dogInfo.textContent = ""
         dogInfo.append(img, h2, button)

        // STEP 4 The button's text should change from Good to Bad or Bad to Good

        button.addEventListener("click", () => {
            if (button.textContent === 'Good Boy'){
                button.textContent = 'Bad Boy'
            } else{
                button.textContent = 'Good Boy'
            }

        fetch(`http://localhost:3000/pups/${dog.isGoodDog}`, {
            method: "PATCH", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dog)
        })
        .then(res =>res.json())
        .then(result => console.log(result))

        })
}



// function createFilter()  {
//     const form = document.getElementById("good-dog-filter")
//     newVar = dog.filter()
//     form.addEventListener("click", () => {
//         if (form.textContent === )

//     })

// }