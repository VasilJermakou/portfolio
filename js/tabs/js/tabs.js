// step 1: при загрузке скрываем все tab-body кроме первого
function init() {
    let tabBody = document.querySelectorAll(".tab-body");
    for (let i = 1; i < tabBody.length; i++) {
        tabBody[i].style.display = "none";
    }
}

init();

// step 2:

let tab = document.querySelectorAll('.tab');
tab.forEach(function(element) {
    element.onclick = showTabs;
});

function showTabs() {
    // console.log("work");
    let data = this.getAttribute("data-tab");
    // console.log(data);
    let tabBody = document.querySelectorAll(".tab-body");
    for (let i = 0; i < tabBody.length; i++) {
        tabBody[i].style.display = "none";
    }
    document.querySelector('.tab-body[data-tab="'+ data +'"]').style.display = "block";
}
