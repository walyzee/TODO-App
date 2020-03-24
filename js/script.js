/******TODO APP Script******/


let input = document.getElementById('input-content')
let container = document.getElementById('main-container')
document.getElementById('add-btn').addEventListener('click',task)

function task() {
    if (input.value !=="") {
        let taskBloc = document.createElement("div")
        taskBloc.setAttribute("class","task-bloc");
        container.appendChild(taskBloc)

        let ValidBtn = document.createElement("button")
        ValidBtn.setAttribute("class","valid-btn");
        ValidBtn.innerHTML = "Complete"
        taskBloc.appendChild(ValidBtn)

        let delBtn = document.createElement("button")
        delBtn.setAttribute("class","del-btn");
        delBtn.innerHTML = "Delete"
        taskBloc.appendChild(delBtn)

        let span = document.createElement("span");
        span.setAttribute("class","text-content");
        span.innerHTML = input.value
        taskBloc.appendChild(span);

        input.value="";

        let breakline = document.createElement("br");
        breakline.setAttribute('class','breakline');
        taskBloc.appendChild(breakline);



        delBtn.addEventListener("click",function(){
            ValidBtn.parentNode.removeChild(ValidBtn);
            delBtn.parentNode.removeChild(delBtn);
            span.parentNode.removeChild(span)
            breakline.parentNode.removeChild(breakline)
            taskBloc.parentNode.removeChild(taskBloc)
        })

        ValidBtn.addEventListener("click",function(){
            if(ValidBtn.innerHTML==="Complete"){
                ValidBtn.innerHTML = "Undo";
                span.setAttribute("style","text-decoration:line-through;")
            }
            else{
                ValidBtn.innerHTML = "Complete"
                span.setAttribute("style","text-decoration:none;")
            }
        })

    }
    else{
        alert('please write the name of the item To-Do')
    }
}