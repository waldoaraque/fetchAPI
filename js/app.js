document.getElementById('txtBtn').addEventListener('click', loadTxt)

document.getElementById('jsonBtn').addEventListener('click', loadJSON)

document.getElementById('apiBTN').addEventListener('click', loadREST)

function loadTxt() {
    fetch('datos.txt')
        .then( res => {
            return res.text()
        })
        .then( data => {
            console.log(data)
            document.getElementById('resultado').innerHTML = data
        })
        .catch( err => {
            console.log(err)
            throw new Error(err)
        })
}

function loadJSON() {
    fetch('empleados.json')
        .then( res => {
            return res.json()
        })
        .then( data => {
            console.log(data)
            let html = ''
            data.forEach( d => {
                html += `
                    <li>${d.nombre} ${d.puesto}</li>
                `
            })
            document.getElementById('resultado').innerHTML = html
        })
        .catch( err => {
            console.log(err)
            throw new Error(err)
        })
}

function loadREST() {
    fetch('https://picsum.photos/list')
        .then( res => {
            return res.json()
        })
        .then( imgs => {
            let html = ''
            imgs.forEach( img => {
                html += `
                    <li>
                        <a target="_blank" href="${img.post_url}">Ver imagen</a> 
                        ${img.author}
                    </li>
                `
            })
            document.getElementById('resultado').innerHTML = html
        })
        .catch( err => {
            console.log(err)
            throw new Error(err)
        })
}