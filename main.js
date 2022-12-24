function tocaSom (id) {
    document.querySelector(id).play();
}

const listaDeteclas = document.querySelectorAll('.tecla')

listaDeteclas.forEach(tecla => {
    //template string
    const id = `#som_${tecla.classList[1]}`
    // função anônima ultilizada para poder passar um parâmetro para função tocaSom(), para esse atributo onclick, sem executá-la imediatamente.
    tecla.onclick = () => tocaSom(id);
})
