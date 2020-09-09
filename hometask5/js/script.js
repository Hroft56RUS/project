let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item");
    menuItemLi = document.createElement("li"),
    divTitle = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    prom = document.getElementById("prompt");

menu.insertBefore(menuItem[2],menuItem[1]);

menuItemLi.classList.add("menu-item");
menuItemLi.textContent = "Пятый пункт";
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

divTitle.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

let text = prompt("Какое Ваше отношение к Aple?","");
prom.textContent = text;
