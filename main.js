const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	if (input.value.trim() === '') {
		alert('Please enter a todo');
		return;
	}
	
	const li = document.createElement('li');
	const span = document.createElement('span');
	const button = document.createElement('button');
	
	span.textContent = input.value;
	button.textContent = 'Delete';
	
	li.appendChild(span);
	li.appendChild(button);
	list.appendChild(li);
	
	input.value = '';
});

list.addEventListener('click', (e) => {
	if (e.target.tagName.toLowerCase() === 'button') {
		e.target.parentElement.remove();
	}
});
