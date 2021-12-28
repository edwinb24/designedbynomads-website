let e = document.getElementById('render-onload')
let n = document.createElement('div')
n.innerHTML = e.textContent
document.body.appendChild(n)
e.parentElement.removeChild(e)

console.log('HEEEEE')
