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
function animateElements(index) {
    var elements = document.querySelectorAll(".banner");

    setTimeout(function () {
        elements[index].classList.remove("slide-remove");
        elements[index].classList.add("slide-active");

        if (index > 0) {
            elements[index - 1].classList.add("slide-remove");
            elements[index - 1].classList.remove("slide-active");
        } else {
            elements[elements.length - 1].classList.add("slide-remove");
            elements[elements.length - 1].classList.remove("slide-active");
        }

        if (index === elements.length - 1) {
            // Khi đến phần tử cuối cùng, gọi lại hàm với index bằng 0 để lặp lại từ đầu
            animateElements(0);
        } else {
            // Ngược lại, gọi lại hàm với index tăng lên 1 để di chuyển đến phần tử tiếp theo
            animateElements(index + 1);
        }
    }, 2000 * index);
}

document.addEventListener("DOMContentLoaded", function () {
    animateElements(0);
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('content-2').style.height = document.getElementById('content-1').offsetHeight + 'px';
    document.querySelectorAll(".banner").forEach(function (e) {
        e.classList.add("slide-remove");
    });

});