// Local Saves

if (!localStorage.getItem('list')) {
    localStorage.setItem('list', '');
}
    
    document.getElementById('list').innerHTML = localStorage.getItem('list');



document.getElementById('submit').value = 'Add Task'
// disabling the submit button

document.getElementById('submit').disabled = true;

document.getElementById('task').onkeyup = () => {
    if (document.getElementById('task').value.trim().   length > 0)
    document.getElementById('submit').disabled = false;
    else 
        document.getElementById('submit').disabled = true;

}


const alertBox = document.getElementById('alert');

function showAlert(message) {
    alertBox.innerText = message;
    alertBox.style.display = 'block';
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 2000);
}



// Creating the User Input

    document.getElementById('list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
        localStorage.setItem('list', document.getElementById('list').innerHTML);
        showAlert('Task deleted!');
    }
});


document.getElementById('frm').onsubmit = () => {

    const input = document.getElementById('task').value.trim(); 

        if (input === '') {
     showAlert('Please enter a task...');
        return false; 
    }

    const capitalized = input.charAt(0).toUpperCase() + input.slice(1);

    const li = document.createElement('li');
    li.innerHTML = ``
    li.className = 'task-item';
  


    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerText = '❌';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';


    const span = document.createElement('span');
    span.textContent = capitalized;
    span.className = 'task-text';



    li.append(checkbox);
    li.append(span);
    li.append(deleteBtn);

    document.getElementById('list').append(li);
    showAlert('Task added successfully!');


    localStorage.setItem('list', document.getElementById('list').innerHTML);
    document.getElementById('task').value = '';
    document.getElementById('submit').disabled = true;

    return false;
}

document.getElementById('list').addEventListener('change', function(e) {
    if (e.target.classList.contains('task-checkbox')) {
        const li = e.target.closest('.task-item');
        if (e.target.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
        localStorage.setItem('list', document.getElementById('list').innerHTML);
    }
});

document.getElementById('delete-completed').onclick = () => {
    const allTasks = document.querySelectorAll('.task-item');
    allTasks.forEach(task => {
        const checkbox = task.querySelector('.task-checkbox');
        if (checkbox && checkbox.checked) {
            task.remove();
        }
    })
    localStorage.setItem('list', document.getElementById('list').innerHTML);
    showAlert('Checked Tasks Deleted!');
};

