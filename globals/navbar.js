
function loadSidebar(){
    fetch('../globals/navbar.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('navbar').innerHTML = text);
}

loadSidebar()

