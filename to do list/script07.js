const item = document.querySelector("#item");
const toDOBox = document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function(event){
        if(event.key === "Enter"){
            console.log(this.value);
            addTodo(this.value);
            this.value = "";
        }
    }
)

const addTodo = (item) => {
    const listitem = document.createElement("li");
    listitem.classList.add("task")
    listitem.innerHTML = `
    <span class="task__text">${item}</span>
    <span class="task__button-close"><i class="fas fa-times"></i></span>
    `; 
    listitem.addEventListener(
        "click",
        function(){
            this.classList.toggle("is-done");
        }
    )
    listitem.querySelector(".task__button-close").addEventListener(
        "click",
        function(){
            listitem.remove();
        }
    )
    toDOBox.appendChild(listitem);
}