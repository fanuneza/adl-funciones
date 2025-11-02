const divs = document.querySelectorAll('div');
divs.forEach(div => {
    div.addEventListener('click', () => {
        div.style.backgroundColor = 'black';
    });
});

let color;

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = 'pink';
    } else if (event.key === 's') {
        color = 'orange';
    } else if (event.key === 'd') {
        color = 'lightblue';
    }
    const keyDiv = document.getElementById('key');
    if (color) keyDiv.style.backgroundColor = color;
});

document.addEventListener('keydown', function (event) {
    let nuevoColor;
    if (event.key === 'q') nuevoColor = 'purple';
    else if (event.key === 'w') nuevoColor = 'gray';
    else if (event.key === 'e') nuevoColor = 'brown';

    if (nuevoColor) {
        const nuevoDiv = document.createElement('div');
        nuevoDiv.style.width = '200px';
        nuevoDiv.style.height = '200px';
        nuevoDiv.style.backgroundColor = nuevoColor;
        document.body.appendChild(nuevoDiv);
    }
});