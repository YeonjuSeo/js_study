const title = document.querySelector("#title");
const BASE_COLOR = "rgb(255, 59, 242)";
const OTHER_COLOR = "#1abc9c";

function handleClick(){
    const currentColor=title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }
    else{
        title.style.color = BASE_COLOR;
    }
}
function init(){
    title.style.color=BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}

init();
