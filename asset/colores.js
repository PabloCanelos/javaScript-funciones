const divs = document.querySelectorAll('.color-box');
divs.forEach(div => {
    div.addEventListener('click', function() {
        div.style.backgroundColor = 'black';
    });
});
let color;
document.addEventListener('keydown', function(event) {
    const key = document.getElementById('key');
    if (event.key === 'a') {
        color = 'pink';
    } else if (event.key === 's') {
        color = 'orange';
    } else if (event.key === 'd') {
        color = 'lightblue';
    } else if (event.key === 'q') {
        let miDiv = document.createElement('div');
        miDiv.style.width = '200px';
        miDiv.style.height = '200px';
        miDiv.style.backgroundColor = 'purple';
        miDiv.style.border = '1px solid black';
        document.body.appendChild(miDiv);
        return;
    } else if (event.key === 'w') {
        let miDiv = document.createElement('div');
        miDiv.style.width = '200px';
        miDiv.style.height = '200px';
        miDiv.style.backgroundColor = 'gray';
        miDiv.style.border = '1px solid black';
        document.body.appendChild(miDiv);
        return;
    } else if (event.key === 'e') {
        let miDiv = document.createElement('div');
        miDiv.style.width = '200px';
        miDiv.style.height = '200px';
        miDiv.style.backgroundColor = 'brown';
        miDiv.style.border = '1px solid black';
        document.body.appendChild(miDiv);
        return;
    }
    key.style.backgroundColor = color;
});
