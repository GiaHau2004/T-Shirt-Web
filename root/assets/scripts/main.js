function autoResizeIframe() {
    var iframe = document.getElementById('autoResizeIframe');
    if (iframe) {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }
}

// Gọi hàm khi iframe đã được tải
document.getElementById('autoResizeIframe').onload = function() {
    autoResizeIframe();
};