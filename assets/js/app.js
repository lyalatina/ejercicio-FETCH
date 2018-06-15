const inputText = document.querySelector('input');
const containerTitle = document.getElementById('title');
const containerYear = document.getElementById('year');
const containerRuntime = document.getElementById('runtime');
const containerImage = document.getElementById('img');

inputText.addEventListener('keypress', (event) => {  // Keypress(Enter) reconozca que se va presionar una tecla
  let Key = event.which || event.KeyCode;  // tecla teclado
  if (Key === 13) { //corresponde a la tecla Enter. codigo (13) es Enter
    let movie = inputText.value // .value debe ser let ingresa el usuario 
    inputText.value = '';  // limpiar
    //console.log(movie);
    

    fetch(`http://www.omdbapi.com/?t=${movie}&apikey=15b5197e`) // t=${movie}(titulo)
    .then(response => response.json())  //si la peticion es correcta va a dar la informacion como una promesa
    .then(data => {
      console.log(data);
      renderInfo(data);
    })
  }
})

const renderInfo = data => {  //parametro data
  containerTitle.innerHTML = data.Title;
  containerYear.innerHTML = data.Year;
  containerRuntime.innerHTML = data.Runtime;
  containerImage.innerHTML = `<img src="${data.Poster}">`;


}