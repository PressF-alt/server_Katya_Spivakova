const todo = {
    action(e) {
        const target = e.target;
        if (target.classList.contains('todo__add')) {
          this.add();
          this.save();
        }
      },
      add() {
        const elemText = document.querySelector('.todo__text');
        if (elemText.disabled || !elemText.value.length) {
          return;
        }
        document.querySelector('.todo__items').insertAdjacentHTML('beforeend', this.create(elemText.value));
        elemText.value = '';
      },
    create(text) {
        return `
          <li class="todo__item" data-todo-state="active">  
          <span class="todo__task">${text}</span>
          </li>`;
      },
      init() {
        const fromStorage = localStorage.getItem('todo');
        if (fromStorage) {
          document.querySelector('.todo__items').innerHTML = fromStorage;
        }
        document.addEventListener('click', this.action.bind(this));
      },
      save() {
        localStorage.setItem('todo', document.querySelector('.todo__items').innerHTML);
      }
  };

  todo.init();