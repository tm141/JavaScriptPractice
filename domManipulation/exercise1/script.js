const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p = document.createElement('p');
p.setAttribute('style','color:red;');
p.textContent = "Hey, I'm red!";
container.appendChild(p);

const h3 = document.createElement('h3');
h3.setAttribute('style', 'color: blue;');
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

const div1 = document.createElement('div');
div1.setAttribute('style', 'background-color:pink; border-style: solid;')
content.appendChild(div1);

const h1 = document.createElement('h1');
h1.textContent = "I’m in a div";

const p1 = document.createElement('p');
p1.textContent = "ME TOO!";

div1.appendChild(h1);
div1.appendChild(p1);

container.appendChild(div1);
