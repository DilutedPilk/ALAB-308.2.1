// Part 1 --------------------------------------------->

const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
const plant_space = 0.8
let plants = 20

let weeks = 1;

const max_capacity = area / plant_space

const max_capacity_80 = max_capacity * .80
const max_capacity_50 = max_capacity * .50

const i_need_this_to_work = plants * weeks**2

if (i_need_this_to_work > max_capacity_80){
    console.log("Pruned");
} else if (i_need_this_to_work >= max_capacity_50 && i_need_this_to_work <= max_capacity_80) {
    console.log("Monitored");
} else {
    console.log("Planted");
}

// Part 2 --------------------------------------------->

plants = 100;
weeks = 10;

let plants_capacity = weeks*plant_space

const space_of_all_plants = (plants_capacity*plants) 

console.log(`Each plant within the age of ${weeks} weeks would need ${plants_capacity} amount of space.`)
console.log(`That means that for ${plants} plants, the raduis would need to be ${space_of_all_plants}.`)
