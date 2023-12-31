const nav = document.querySelector("nav");
nav.addEventListener("click", (e) => {
    if (e.target.nodeName != "I") return;
    console.log(e.target.nodeName);
    let data;
    switch (e.target.getAttributeNode("item-id").value) {
        case "home":
            data = { title: "HOME<br>State Project", color: "#90bef0", itemId: "home" }
            update(data);
            history.pushState(data, "home", "home");
            break;
        case "search":
            data = { title: "SEARCH", color: "#54c9ff", itemId: "search" }
            update(data);
            history.pushState(data, "search", "search");
            break;
        case "like":
            data = { title: "LIKE", color: "#42e3f5", itemId: "like" }
            update(data);
            history.pushState(data, "like", "like");
            break;
        default:
            data = { title: "PROFILE", color: "#42f5f2", itemId: "profile" }
            update(data);
            history.pushState(data, "profile", "profile");
            break;
    }

})

window.addEventListener("popstate",e=>{
    if(history.state){
        update(history.state)
    }else{
        update({ title: "HOME<br>State Project", color: "#90bef0", itemId: "home" });
    }
})

function update(data){
    document.querySelector("h1").innerHTML = data.title;
    document.querySelector("main").style.backgroundColor = data.color;
    document.querySelectorAll("i").forEach(E=>{
        E.style.color = "#FFF"
    })
    document.querySelector(`i[item-id=${data.itemId}]`).style.color = "#007497";
}
