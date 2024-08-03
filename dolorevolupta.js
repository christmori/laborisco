const u = { name: 'John', age: 30 };

if ('name' in u) {
    console.log('Property "name" exists in object u');
} else {
    console.log('Property "name" does not exist in object u');
}

if ('gender' in u) {
    console.log('Property "gender" exists in object u');
} else {
    console.log('Property "gender" does not exist in object u');
}
