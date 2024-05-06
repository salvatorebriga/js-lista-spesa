"use srict"

const listaDellaSpesa = ['Pane', 'Pasta', 'Pomodori', 'Caramelle', 'Nutella', 'Carne', 'Pesce', 'Pollo', 'Piadina', 'Pesto']
let i = 0;

const ul = document.getElementById('list');

while(i < listaDellaSpesa.length){
    const li = document.createElement('li');
    li.innerText = listaDellaSpesa[i];
    ul.append(li);
    i++;
}