// Write your code here:

const findMyKeys = stuff => {
    const missingItem = item => item === 'keys';
    return stuff.findIndex(missingItem);
}

// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4
