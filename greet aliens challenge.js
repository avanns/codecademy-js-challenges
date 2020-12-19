// Write your code here:

function greetAliens (species) {
    for (i = 0; i < species.length; i++) {
        console.log(`Oh powerful ${species[i]}, we humans offer our unconditional surrender!`)
    }
}



// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

// “Oh powerful [stringElement], we humans offer our unconditional surrender!”