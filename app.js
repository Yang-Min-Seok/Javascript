// works like CSS's way of selecting
// if there are lots of element's,
// querySelector takes only 'the first one'
const title = document.querySelector('.hello h1');
// So if you want take all of them,
// you should use querySelectorAll
const title_2 = document.querySelectorAll('.hello h1')
console.log(title);
console.log(title_2);