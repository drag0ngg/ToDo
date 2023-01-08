const list = document.querySelector('#todo');
const inputtask = document.querySelector('#addtodo');
const button = document.querySelector('#submit');

button.addEventListener('click', function(){
  const newelem = document.createElement('li');
  newelem.innerText = inputtask.value;
  list.prepend(newelem);
  if (newelem.addEventListener('click', function(){
    newelem.remove(self);
  }));
})