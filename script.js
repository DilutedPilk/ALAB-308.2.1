// Part 1 --------------------------------------------->

const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
const plant_space = 0.8
let weeks;
let plants = 20

let plants_per_week = (plants * weeks) * 2

let plants_capacity = plants_per_week * plant_space;

for (weeks = 1; weeks <= 3; weeks++) {

    if (plants_per_week > area * .8) {
        console.log("Pruned");
    } else if (plants_per_week >= area * .5 && plants_per_week <= area * .8) {
        console.log("Monitored");
    } else {
        console.log("Planted");
    }

}


// // Part 2 --------------------------------------------->

plants = 100;
weeks = 10;
plants_per_week = (plants * weeks) * 2;
plants_capacity = plants_per_week * plant_space;

console.log(`If the amount of plants starts at ${plants}, then at week ${weeks} there will be ${plants_per_week} plants.`)
console.log(`The amount of space that the plants will take up is ${plants_capacity} meters, therefore the radius would be ${plants_capacity / 2}.`)
// // Part 3 --------------------------------------------->


