const container = document.querySelector('#container');
const display1 = container.firstElementChild;

console.log(display1);

const controls = document.querySelector('.ending');
const display2 = controls.previousElementSibling;

console.log(display2);

const divs = document.querySelectorAll('div');
const arr = [...divs];

console.log(arr);

/*
const div1 = document.createElement('div');
//div1.style.color = "blue";
div1.style.cssText = "background: blue; color: white;";
div1.setAttribute("style", "font-family: sans-serif; font-weight: bold;");
//div1.setAttribute("id", "theDiv");
div1.classList.add("theDiv");
div1.textContent = "Another Hello World!";
container.appendChild(div1);
*/

const wrapper = document.querySelector('#wrapper');
const content = document.createElement('div');

content.classList.add('content');
content.textContent = "This is the glorious text-content!";
wrapper.appendChild(content);

const pRed = document.createElement('p');
pRed.style.color = "red";
pRed.textContent = "Hey I'm red!";
wrapper.appendChild(pRed);

const h3Blue = document.createElement('h3');
h3Blue.style.color = "blue";
h3Blue.textContent = "I'm a blue h3!";
wrapper.appendChild(h3Blue);

const divBlack = document.createElement('div');
divBlack.style.border = "2px solid black";
divBlack.style.background = "pink";

const h1Black = document.createElement('h1');
const pBlack = document.createElement('p');
h1Black.textContent = "I'm in a div";
pBlack.textContent = "ME TOO!";
divBlack.appendChild(h1Black);
divBlack.appendChild(pBlack);
wrapper.appendChild(divBlack);


const btn1 = document.querySelector('#btn1');
btn1.onclick = () => alert('Hello World');

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert('Hello World');
});

function alertFunction1(){
    alert('YAY! YOU DID IT!');
}

const btn3 = document.querySelector('#btn3');
btn3.onclick = alertFunction1;

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', alertFunction1);

const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', function(e){
    console.log(e);
});

/*
let age = prompt('What is your age?', 18);
let welcome = (age < 18) ? () => alert('You are not allowed here!') : () => alert('Come in...');
welcome();
*/

const btn6 = document.querySelector('#btn6');

function random(number){
    return Math.floor(Math.random() * (number + 1));
}

function bgChange(e){
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}

btn6.addEventListener('click', bgChange);

const textBox = document.querySelector('#textBox');
const output = document.querySelector('#output');

textBox.addEventListener('keydown', (event) => {
    event.preventDefault();
    output.textContent = `You pressed "${event.key}"`;
});

const buttons = document.querySelectorAll('button');
const h1Title = document.querySelector('.h1-title');
const btn7 = document.createElement('button');
const container2 = document.querySelector('.container2');
btn7.textContent = "Last Btn";

/*
buttons.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        const rndCol2 = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        event.target.style.background = rndCol2;
        h1Title.textContent = `New WOrld!!!`;
        console.log('new world');
    });
});
*/

    btn7.addEventListener('click', (event) => {
        event.preventDefault();
        const rndCol2 = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        event.target.style.background = rndCol2;
        h1Title.textContent = `New WOrld order!!!`;
        console.log('new world');
    });


container2.appendChild(btn7);