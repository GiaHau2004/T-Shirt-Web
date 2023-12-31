function loadHTML(path, idTarget) {
    fetch(path)
        .then(response => response.text())
        .then(html => {
            document.getElementById(idTarget).innerHTML = html;
        });
}

document.addEventListener("DOMContentLoaded", function () {
    loadHTML('../includes/header.html', 'header');
    loadHTML('../includes/footer.html', 'footer');
    loadHTML('/pages/home.html', 'page');
});

function showMenu() {
    var e = document.getElementById('menu');
    if (e.style.right == '-100%') {
        e.style.right = '0%';
        document.getElementById('icon-bar').innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
    else {
        e.style.right = '-100%';
        document.getElementById('icon-bar').innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('content-2').style.height = document.getElementById('content-1').offsetHeight + 'px';
});