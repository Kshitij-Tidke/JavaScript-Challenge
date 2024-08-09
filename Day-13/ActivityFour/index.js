const _ = require('lodash');
const axios = require('axios');

// Task 6:
const numbers = [1, 2, 3, 4];
const doubled = _.map(numbers, num => num * 2);
console.log(doubled); 

const object1 = { 'a': 1, 'b': 2 };
const object2 = { 'b': 3, 'c': 4 };
const merged = _.merge(object1, object2);
console.log(merged); 

// Task 7:
axios.get('https://api.github.com/users/Kshitij-tidke')
    .then(response => {
        console.log(response.data); 
    })
    .catch(error => {
        console.error('Error fetching data:', error); 
    });