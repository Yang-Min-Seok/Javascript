// how to declare an object
const player = {
    name: 'kurooru',
    point: 10,
    fat: true,   
};

// print
console.log(player);
console.log(player.name);
console.log(player['name']);

// update
player.fat = false;
console.log(player.fat)
// we can't modify const
// but it is possible to update something 'inside' of const

// add
player.lastName = 'Yang';
console.log(player.lastName);