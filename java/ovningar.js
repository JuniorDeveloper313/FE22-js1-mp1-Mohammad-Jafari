const x = ['Rad1', 'Rad2', 'Rad3', 'Rad4', 'Rad5'];
for (let i = 0; i < 5; i++) {
    const el = document.createElement('h1');
    document.body.appendChild(el);
    el.innerText = x[i];
    el.style.textAlign = 'center';
    el.style.backgroundColor = `hsl(${100 + i * 26},100%,80%)`;
    el.style.marginTop = '10px';
    el.style.marginLeft = '10px';
    el.style.marginRight = '10px';
    el.style.fontSize = i + '7px'
    el.style.marginTop = i + '7px'
}
const div = document.createElement("div");
div.style.marginTop = '40px';
div.style.marginLeft = '10px';
div.style.marginRight = '10px';
div.style.border = "2px solid black";
div.style.color = "black";
div.style.display = "flex";
div.style.justifyContent = "space-around";
div.style.padding = '100px';
document.body.appendChild(div);
console.log(div);
const list1 = document.createElement('ol');
div.appendChild(list1);
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
list1.style.listStyleType = 'none';
list1.style.backgroundColor = 'lightskyblue';
list1.style.padding = '10px';
for (let i = 0; i < number.length; i++) {
    const el = document.createElement('li');
    document.body.appendChild(el);
    list1.appendChild(el);
    el.innerText = number[i];
    el.style.width = '100px';
    el.style.height = '30px';
    if (i == 4) {
        el.style.backgroundColor = 'transparent';
        el.style.color = 'white';
    }
    else if (i % 2 == 1) {
        el.style.backgroundColor = 'white';
        el.style.color = 'black';
    }

    else if (i % 2 == 0) {
        el.style.backgroundColor = 'black';
        el.style.color = 'white';
    }
}
const number1 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const list2 = document.createElement('ol');
list2.style.listStyleType = 'none';
list2.style.backgroundColor = 'lightskyblue';
list2.style.padding = '10px';
div.appendChild(list2);
for (let i = 0; i < 10; i++) {
    const el = document.createElement('li');
    document.body.appendChild(el);
    list2.appendChild(el);
    el.innerText = number1[i];
    el.style.width = '100px';
    el.style.height = '30px';
    el.style.textAlign = "center";
    if (i == 1) {
        el.style.backgroundColor = 'transparent';
        el.style.color = 'white';
    }
    else if (i % 2 == 0) {
        el.style.backgroundColor = 'white';
        el.style.color = 'black';
    }
    else if (i % 2 == 1) {
        el.style.backgroundColor = 'black';
        el.style.color = 'white';
    }
}
const ord = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
const list3 = document.createElement('ol');
div.appendChild(list3);
list3.style.listStyleType = 'none';
list3.style.backgroundColor = 'lightskyblue';
list3.style.padding = '10px';
for (let i = 0; i < 10; i++) {
    const el = document.createElement('li');
    document.body.appendChild(el);
    list3.appendChild(el);
    el.innerText = ord[i];
    el.style.width = '100px';
    el.style.height = '30px';
    el.style.textAlign = "right";
    if (i == 5) {
        el.style.backgroundColor = 'transparent';
        el.style.color = 'black';
    }
    else if (i % 2 == 1) {
        el.style.backgroundColor = 'white';
        el.style.color = 'black';
    }
    else if (i % 2 == 0) {
        el.style.backgroundColor = 'black';
        el.style.color = 'white';
    }


}