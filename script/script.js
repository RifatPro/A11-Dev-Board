

document.getElementById('complate-btn-1').addEventListener('click', function () {


    const task = document.getElementById('task-number').innerText;
    const taskValue = parseInt(task) - 1;
    document.getElementById('task-number').innerText = taskValue;

    const addTask = document.getElementById('add-task').innerText;

    const addValue = parseInt(addTask) + 1;
    document.getElementById('add-task').innerText = addValue;


    alert('Board Updated Successfully')
    if (alert) {
        const classAdd = document.getElementById('complate-btn-1');
        classAdd.setAttribute('disabled', true)
    }



    const goodAlert = document.getElementById('task-number').innerText;
    if(goodAlert == 0){
        alert('Congrats!!! You have completed all the current task')
    }
    


   
    // time....

    let dates2 = new Date();

    const history = document.getElementById('add-history');
    const title1 = document.getElementById('title-1').innerText;
    const addHistory = document.createElement('div');
    addHistory.innerHTML = `
<p>You have Complete The Task ${title1} at ${dates2.toLocaleTimeString()}</p>

`
    addHistory.classList.add('extra-style')
    history.appendChild(addHistory);



})

document.getElementById('complate-btn-2').addEventListener('click', function () {

    const task = document.getElementById('task-number').innerText;
    const taskValue = parseInt(task) - 1;
    document.getElementById('task-number').innerText = taskValue;

    const addTask = document.getElementById('add-task').innerText;

    const addValue = parseInt(addTask) + 1;
    document.getElementById('add-task').innerText = addValue;



    alert('Board Updated Successfully')
    if (alert) {
        const classAdd = document.getElementById('complate-btn-2');
        classAdd.setAttribute('disabled', true)
    }



    const goodAlert = document.getElementById('task-number').innerText;
    if(goodAlert == 0){
        alert('Congrats!!! You have completed all the current task')
    }

    // time....

    let dates2 = new Date();

    const history = document.getElementById('add-history');
    const title1 = document.getElementById('title-2').innerText;
    const addHistory = document.createElement('div');
    addHistory.innerHTML = `
<p>You have Complete The Task ${title1} at ${dates2.toLocaleTimeString()}</p>

`
    addHistory.classList.add('extra-style')
    history.appendChild(addHistory);

})

document.getElementById('complate-btn-3').addEventListener('click', function () {

    const task = document.getElementById('task-number').innerText;
    const taskValue = parseInt(task) - 1;
    document.getElementById('task-number').innerText = taskValue;

    const addTask = document.getElementById('add-task').innerText;

    const addValue = parseInt(addTask) + 1;
    document.getElementById('add-task').innerText = addValue;



    alert('Board Updated Successfully')
    if (alert) {
        const classAdd = document.getElementById('complate-btn-3');
        classAdd.setAttribute('disabled', true)
    }


    const goodAlert = document.getElementById('task-number').innerText;
    if(goodAlert == 0){
        alert('Congrats!!! You have completed all the current task')
    }


    // time....

    let dates2 = new Date();

    const history = document.getElementById('add-history');
    const title1 = document.getElementById('title-3').innerText;
    const addHistory = document.createElement('div');
    addHistory.innerHTML = `
<p>You have Complete The Task ${title1} at ${dates2.toLocaleTimeString()}</p>

`
    addHistory.classList.add('extra-style')
    history.appendChild(addHistory);

})

document.getElementById('complate-btn-4').addEventListener('click', function () {

    const task = document.getElementById('task-number').innerText;
    const taskValue = parseInt(task) - 1;
    document.getElementById('task-number').innerText = taskValue;

    const addTask = document.getElementById('add-task').innerText;

    const addValue = parseInt(addTask) + 1;
    document.getElementById('add-task').innerText = addValue;



    alert('Board Updated Successfully')
    if (alert) {
        const classAdd = document.getElementById('complate-btn-4');
        classAdd.setAttribute('disabled', true)
    }



    const goodAlert = document.getElementById('task-number').innerText;
    if(goodAlert == 0){
        alert('Congrats!!! You have completed all the current task')
    }


    // time....

    let dates2 = new Date();

    const history = document.getElementById('add-history');
    const title1 = document.getElementById('title-4').innerText;
    const addHistory = document.createElement('div');
    addHistory.innerHTML = `
<p>You have Complete The Task ${title1} at ${dates2.toLocaleTimeString()}</p>

`
    addHistory.classList.add('extra-style')
    history.appendChild(addHistory);

    
})

document.getElementById('complate-btn-5').addEventListener('click', function () {

    const task = document.getElementById('task-number').innerText;
    const taskValue = parseInt(task) - 1;
    document.getElementById('task-number').innerText = taskValue;

    const addTask = document.getElementById('add-task').innerText;

    const addValue = parseInt(addTask) + 1;
    document.getElementById('add-task').innerText = addValue;



    alert('Board Updated Successfully')
    if (alert) {
        const classAdd = document.getElementById('complate-btn-5');
        classAdd.setAttribute('disabled', true)
    }


    const goodAlert = document.getElementById('task-number').innerText;
    if(goodAlert == 0){
        alert('Congrats!!! You have completed all the current task')
    }


    // time....

    let dates2 = new Date();

    const history = document.getElementById('add-history');
    const title1 = document.getElementById('title-5').innerText;
    const addHistory = document.createElement('div');
    addHistory.innerHTML = `
<p>You have Complete The Task ${title1} at ${dates2.toLocaleTimeString()}</p>

`
    addHistory.classList.add('extra-style')
    history.appendChild(addHistory);

   

})

document.getElementById('complate-btn-6').addEventListener('click', function addTime() {



    const task = document.getElementById('task-number').innerText;
    const taskValue = parseInt(task) - 1;
    document.getElementById('task-number').innerText = taskValue;

    const addTask = document.getElementById('add-task').innerText;

    const addValue = parseInt(addTask) + 1;
    document.getElementById('add-task').innerText = addValue;



    alert('Board Updated Successfully')
    if (alert) {
        const classAdd = document.getElementById('complate-btn-6');
        classAdd.setAttribute('disabled', true);
    }



    const goodAlert = document.getElementById('task-number').innerText;
    if(goodAlert == 0){
        alert('Congrats!!! You have completed all the current task')
    }


    // time....

    let dates2 = new Date();

    const history = document.getElementById('add-history');
    const title1 = document.getElementById('title-6').innerText;
    const addHistory = document.createElement('div');
    addHistory.innerHTML = `
<p>You have Complete The Task ${title1} at ${dates2.toLocaleTimeString()}</p>

`
    addHistory.classList.add('extra-style')
    history.appendChild(addHistory);

   
})











document.getElementById('clear-btn').addEventListener('click', function () {
    const history2 = document.getElementById('add-history');
    history2.classList.add('hidden')

})



document.getElementById('blog').addEventListener('click', function () {

    window.location.href = './blog.html'
},)


const dates2 = new Date();
const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dates = dates2.getDate();
const month = months[dates2.getMonth()];
const year = dates2.getFullYear();

const setDate = dates + " " + month + " " + year;

const dayTo = days[dates2.getDay()];
const fixedDay = dayTo.slice(0, 3);

document.getElementById('day-name').innerText = fixedDay + ',';

document.getElementById('date-name').innerText = setDate;





document.getElementById('theme-change').addEventListener('click', function () {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.backgroundColor = randomColor;
})


