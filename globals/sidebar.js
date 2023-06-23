
function loadSidebar(){
    fetch('../globals/sidebar.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('sidebar').innerHTML = text);
}

function loadSidebar2(){
    fetch('../globals/sidebar.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('sidebar2').innerHTML = text);
}

loadSidebar()
loadSidebar2()
