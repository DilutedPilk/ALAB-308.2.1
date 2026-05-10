// Part 1 --------------------------------------------->

const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
const plant_space = 0.8
let weeks;
let plants = 20

let plants_per_week = (plants * weeks) * 2

let plants_capacity = plants * plant_space;

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

// plants = 100;
// weeks = 10;

// let plants_capacity = weeks * plant_space;

// const space_of_all_plants = plants_capacity * plants;

// console.log(`Each plant within the age of ${weeks} weeks would need ${plants_capacity} amount of space.`);
// console.log(`That means that for ${plants} plants, the raduis would need to be ${space_of_all_plants} meters.`);

// // Part 3 --------------------------------------------->


