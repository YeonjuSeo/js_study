const title = document.querySelector("#title");
title.innerHTML="Hi! From JS";
title.style.color = "red";
document.title = 'I own you now';

function handleResize(){
    console.log("I have been resized.")
}

/*window.addEventLister("resize", handleResize())로 입력한다면?
resize 되지않아도 바로 함수가 호출됨*/ 
window.addEventListener("resize", handleResize);
/*위와 같이 작성한다면 필요할 때(resize되었을 때)에 함수가 호출됨 */