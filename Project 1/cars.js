document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('carsLink');
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var linkHref = this.getAttribute('href');
        document.body.style.opacity = 0;

        setTimeout(function() {
            window.open(linkHref, '_blank');
        }, 400);
    });
});