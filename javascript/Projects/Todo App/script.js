let todolist = [];
DisplayItems();

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem=inputElement.value;
    let todoDate=dateElement.value;
    todolist.push({item:todoItem,dueDate:todoDate});
    inputElement.value='';
    dateElement.value='';

    DisplayItems();
}

function DisplayItems(){
    let containerElement=document.querySelector('.todo-container');
    let newHtml='';
    for(let i=0;i<todolist.length;i++){
        let {item ,dueDate}=todolist[i];
        newHtml +=`
        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button onclick="todolist.splice(${i},1); DisplayItems();" >Delete</button> \n
       
        `;
    }
    containerElement.innerHTML=newHtml;
}