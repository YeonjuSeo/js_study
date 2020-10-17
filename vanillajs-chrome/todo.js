const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput=toDoForm.querySelector("input"),
    toDoList=document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"
let toDos=[];


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function paintToDo(text){
    /* 지금까지는 html에서 원하는 요소를 가져왔지만
    js에서도 이렇게 원하는 요소를 직접 만들 수 있다. */
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function saveToDos(){
    /*local storage에는 js의 data를 저장할 수 없음. 
    data를 string으로만 저장하려고 함 */
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
    /*JSON.stringify로 js object를 string으로 바꿔줌 */
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        /*JSON.parse를 통해 string을 js가 다룰 수 있는 object로 변환 */
        parsedToDos.forEach(function(toDo){
            /*forEach로 array 속 요소 하나마다 함수를 실행시킴 */
            paintToDo(toDo.text);
        });
    }
}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !==parseInt(li.id);
        /*li.id가 string이라 int로 변환 */
    })
    /*filter는 array의 모든 아이템에 함수를 실행하고
    filterFN에서 true로 체크된 아이템들만 가지고 새로운 array를 만듦*/
    toDoList.removeChild(li);
    toDos = cleanToDos;
    saveToDos();
}

function init(){
 loadToDos();
 toDoForm.addEventListener("submit",handleSubmit);

}
init();