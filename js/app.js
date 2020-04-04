document.getElementById('txtBtn').addEventListener('click', loadTxt)

function loadTxt() {
    fetch('datos.txt')
        .then( res => {
            return res.text()
        })
        .then( data => {
            console.log(data)
            document.getElementById('resultado').innerHTML = data
        })
        .catch( e => {
            console.log(e)
        })
}