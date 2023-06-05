
function loadSidebar(){
    fetch('../globals/sidebar.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('sidebar').innerHTML = text);
}

loadSidebar()