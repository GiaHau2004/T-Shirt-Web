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
});
