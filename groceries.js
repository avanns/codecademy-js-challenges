const testArr = [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}];
// returns 'Carrots, Hummus, Pesto and Rigatoni'

const groceries = arr => {
    if (arr.length === 0 || arr.length === 1) {
        return arr[0].item;
    }
    let groceriesArr = [];
    for (let i = 0; i < arr.length; i++) {
        groceriesArr.push(arr[i].item);
    }
    const lastWord = groceriesArr.pop();
    return `${groceriesArr.join(', ')} and ${lastWord}`;
}

console.log(groceries(testArr));