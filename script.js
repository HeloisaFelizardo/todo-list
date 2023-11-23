const tarefa = document.querySelector('#tarefa');
const btn = document.querySelector('#btn');
const lista = document.querySelector('#lista');

btn.addEventListener('click', function () {
	if (tarefa.value == '') {
		alert('Digite alguma tarefa');
	} else {
		lista.innerHTML += `<li>
            <i class="fa fa-check-circle check"></i>
            <span>${tarefa.value}</span>
            <i class="fa fa-trash-can close"></i>
        </li>`;
		tarefa.value = '';
	}
});

// Event delegation para elementos com classe 'close'
lista.addEventListener('click', function (e) {
	if (e.target.classList.contains('close')) {
		e.target.parentElement.remove();
	} else if (e.target.classList.contains('check')) {
		e.target.style.color = '#349223';
		e.target.nextElementSibling.style.textDecoration = 'line-through';
	}
});
