// Write your code here:

const dogFactory = (name, breed, weight) => {
    return {
    _name: name,
    _breed: breed,
    _weight: weight,
    // getters and setters
    get getName() {
        return this._name;
        },
    set setName(n) {
        this._name = n;
        },
    get getBreed() {
        return this._breed;
        },
    set setBreed(b) {
        this._breed = b;
        },
    get getWeight() {
      return this._weight;
      },
    set setWeight(w) {
      this._name = w;
      }
}}
// return {_name, _breed, _weight};}


let testObj = dogFactory('Joe', 'Pug', 27);

console.log(testObj);


const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name() {
            return this._name;
        },
        set name(newName) {
            this._name = newName;
        },
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return 'ruff! ruff!'
        },
        eatTooManyTreats() {
            this._weight++
        }
    }
}
