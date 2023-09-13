// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
    console.log('After DOM is loaded');
    let newP = document.querySelector("#text");
    newP.textContent = 'This is really cool!';
    console.log(newP.textContent);
});

console.log('Before DOM is loaded');
console.log(document.querySelector('#text').textContent);