const menu = {
    _courses: {
        // appetizers objects along with getter and setter methods
        _appetizers: [],
        get appetizers() {
            return this._appetizers;
        },
        set appetizers(appetizerIn) {
            _appetizers = appetizerIn;
        },

        // mains objects along with getter and setter methods
        _mains: [],
        get mains() {
            return this._mains;
        },
        set mains(mainIn) {
            _mains = mainIn;
        },
        
        // desserts objects along with getter and setter methods
        _desserts: [],
        get desserts() {
            return this._desserts;
        },
        set desserts(dessertIn) {
            _desserts = dessertIn;
        },
    },

    // courses getter
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        }
    },

    // easily add a dish to a certain course
    addDishToCourse (courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        
        this._courses[courseName].push(dish);
    },

    // get random dish from a certain course
    getRandomDishFromCourse (courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    // generates a random meal
    generateRandomMeal: function () {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        
        const totalPrice = Math.ceil((appetizer.price + main.price + dessert.price) * 100) / 100;
        
        return `Tonight, you will be eating ${appetizer.name} as an appetizer. For your main course, you will be eating ${main.name}. As for desserts, you will be eating ${dessert.name}. The total price is ${totalPrice}.`;
    }
}

// adds a whole bunch of menu items
menu.addDishToCourse('appetizers', 'Caesar salad', 4.25);
menu.addDishToCourse('appetizers', 'chips and salsa', 3.95);
menu.addDishToCourse('appetizers', 'shrimp', 4.95);

menu.addDishToCourse('mains', 'rib-eye steak', 25.95);
menu.addDishToCourse('mains', 'lasagna', 19.95);
menu.addDishToCourse('mains', 'goulash', 23.50);

menu.addDishToCourse('desserts', 'cheesecake', 9.95);
menu.addDishToCourse('desserts', 'chocolate cake', 12.45);
menu.addDishToCourse('desserts', 'ice cream sundae', 9.95);

// final function
let meal = menu.generateRandomMeal();
console.log(meal);
