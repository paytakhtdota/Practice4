const home = document.querySelector("nav :first-child");
const search = document.querySelector("nav :nth-child(2)");
const like = document.querySelector("nav :nth-child(3)");
const profile = document.querySelector("nav :nth-child(4)");
const h1 = document.querySelector("h1");
const main = document.querySelector("main");
const a = document.querySelectorAll("a");

window.addEventListener("hashchange", () => {
    if (home.href.includes(window.location.hash)) {
        render({ text: " HOME<br>Hash Project", color: "#54c9ff", href: "#home" });
    } else if (search.href.includes(window.location.hash)) {
        render({ text: "SEARCH", color: "#42e3f5", href: "#search" });
    }
    else if (like.href.includes(window.location.hash)) {
        render({ text: "LIKE", color: "#42f5f2", href: "#like" });
    }
    else if (profile.href.includes(window.location.hash)) {
        render({ text: "PROFILE", color: "#90bef0", href: "#profile" });
    }

    function render(date) {
        h1.innerHTML = date.text;
        main.style.backgroundColor = date.color;
        a.forEach(element => {
            if (element.href.includes(window.location.hash)) {
                element.style.color = "#007497";
            } else {
                element.style.color = "#FFF";
            }
        })

    }

});

