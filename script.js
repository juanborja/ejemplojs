console.log('hola 1');
debugger;
console.log('hola 2');

function test(i) {
  var element = document.getElementById('fname');
  const x = 'Esto no cambia de valor';
  let y = 'Esto puede cambiar de valor';
  y = 'Otro';
  debugger;
  console.log(element);
  element.value = i;
}
