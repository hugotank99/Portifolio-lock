function handleClick() {
    document.querySelector('#titulo').innerHTML = "Hugo Ramos";
}
function handleMove() {
    document.querySelector('#titulo').innerHTML = Date.now();
}
function handleOut() {
    document.querySelector('#titulo').innerHTML = "Hugo Tancredo"
}

console.log('Tudo ok?')