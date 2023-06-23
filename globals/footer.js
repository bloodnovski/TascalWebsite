
function loadSidebar(){
    fetch('../globals/footer.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('footer').innerHTML = text);
}

loadSidebar()

