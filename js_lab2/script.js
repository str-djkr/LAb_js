const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  // Створення нового TODO елемента
  const todoText = prompt('Enter TODO text:');
  if (!todoText) return; // Якщо користувач не ввів текст, виходимо

  const todoItem = document.createElement('li');
  todoItem.className = classNames.TODO_ITEM;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.addEventListener('change', updateUncheckedCount);

  const todoTextSpan = document.createElement('span');
  todoTextSpan.className = classNames.TODO_TEXT;
  todoTextSpan.textContent = todoText;

  const deleteButton = document.createElement('button');
  deleteButton.className = classNames.TODO_DELETE;
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', deleteTodo);

  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoTextSpan);
  todoItem.appendChild(deleteButton);

  list.appendChild(todoItem);

  // Оновлення лічильників
  itemCountSpan.textContent = list.children.length;
  updateUncheckedCount();
}

function updateUncheckedCount() {
  const uncheckedCount = Array.from(list.children).filter(todo => !todo.querySelector(`.${classNames.TODO_CHECKBOX}`).checked).length;
  uncheckedCountSpan.textContent = uncheckedCount;
}

function deleteTodo() {
  const todoItem = this.parentNode;
  list.removeChild(todoItem);

  // Оновлення лічильників
  itemCountSpan.textContent = list.children.length;
  updateUncheckedCount();
}
