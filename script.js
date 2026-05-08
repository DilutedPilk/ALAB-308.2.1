
const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
const plant_space = 0.8
let plants = 20

let weeks = 2

const max_capacity = area / plant_space

const max_capacity_80 = max_capacity * .80
const max_capacity_50 = max_capacity * .50

if (weeks === 1){
    plants = plants * 1;
    console.log(plants)
} else if (weeks === 2){
    plants = plants * 2
    console.log(plants)
} else if (weeks === 3){
    plants = plants * 4
    console.log(plants)
}

if (plants > max_capacity_80){
    console.log("Pruned");
} else if (plants >= max_capacity_50 && plants <= max_capacity_80) {
    console.log("Monitored");
} else {
    console.log("Planted");
}