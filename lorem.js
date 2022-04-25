//declara el elemento a manipular en el DOM
let verLorem=document.getElementById('verlorem');
//declara el arreglo para almacenar los datos de la consulta
let arregloLorem=[];
// declara request


function traer() {
    fetch("tabla.json")
    .then(response=>response.json())
    .then((datos)=>{
    arregloLorem=datos
    console.log(arregloLorem)
    recorrerPost(datos)
    }) }
  
  
  
  function recorrerPost(datos){
    verLorem.innerHTML = ''
    arregloLorem.map(e => {
      
    verLorem.innerHTML+= `
    <div class="col-md-6">
        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success">${e.userId}</strong>
            <h3 class="mb-0">${e.title}</h3>
            <div class="mb-1 text-muted">${e.id}</div>
            <p class="card-text mb-auto">${e.body}</p>
            <a href=${e.url} class="btn btn-outline-success">Continuar Leyendo</a>
            <button class="btn btn-outline-warning" onclick = "agregarFavorito('${e.title}')">Agregar a Favoritos</button>
            </div>
      </div>
  </div>`
  })
  }