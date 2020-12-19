// Write your code here:

function convertToBaby (arr) {
    let babyNames = [];
    for (i = 0; i < arr.length; i++) {
        let prefixBaby = 'baby ' + (arr[i]);
        babyNames.push(prefixBaby);
    }
    return babyNames;
}






// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));

