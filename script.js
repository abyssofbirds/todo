const input = document.querySelector('input')
const btn = document.getElementById('add-btn')
const area = document.querySelectorAll('.todo')
const timeEvent = document.querySelectorAll('.time-task-js')
const list = document.querySelector('.items')
const btnCompleted = document.querySelectorAll('.completed')
//Обновление времени

var time = setInterval(function() {
    var date = new Date();
    time = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
  }, 1000);

  
// Удаление события




var newTask = {};

// Счетчик события

count = 0;
btn.onclick = function counter () {
    count++;
    // console.log(count + ': '+ time);  
    timeEvent.innerHTML = time;  
    newTask.time = time;
    newTask.id = count; 
}


// Добавления задачи

const firstTodo = btn.addEventListener('click', event => {    
    let i=count-1; 
    area[i].style.display = 'block';   
    area[i].innerHTML = input.value; 
    timeEvent[i].style.display = 'block'
    timeEvent[i].innerHTML = time;
    newTask.name = input.value;
    btnCompleted[i].style.display = 'block';
    input.value = '';     
})


// list.addEventListener('click', function(event){
//     console.log(event.target);
// })



let deleteTask = btnCompleted.forEach(function(btnCompleted, i) {
    btnCompleted.addEventListener('click', () => {
        console.log(i);
        area[i].textContent = '';
        area[i].style.display = 'none';
        timeEvent[i].textContent = '';
        timeEvent[i].style.display = 'none'; 
        document.querySelectorAll('.completed')[i].style.display = 'none';
    })
})