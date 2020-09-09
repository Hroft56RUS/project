let box = document.getElementById("box"),
    btn = document.getElementsByTagName("button"),
    circle = document.getElementsByClassName("circle"),
    heart = document.querySelectorAll(".heart"),
    oneheart = document.querySelector(".heart"),
    wrapper = document.querySelector(".wraper");

box.style.backgroundColor = "blue";
btn[1].style.borderRadius = "100%";
circle[0].style.backgroundColor = "red";
circle[1].style.backgroundColor = "yellow";
circle[2].style.backgroundColor = "green";

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = "blue";
// }

// heart.forEach(function(item, i, hearts){
//     item.style.backgroundColor = "blue";
// });

let div = document.createElement("div"),
    text = document.createTextNode("АДВРАЛДВРА");

div.classList.add("black");
//document.body.appendChild(div);
//wrapper.appendChild(div);

//div.innerHTML = "<h1>dfsdfsdf</h1>";
div.textContent = "<h1>dfsdfsdf</h1>";

document.body.insertBefore(div,circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1],circle[1]);


console.log(div);
