document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('transitionLink');
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var linkHref = this.getAttribute('href');
        document.body.style.opacity = 0;

        setTimeout(function() {
            window.open(linkHref, '_blank');
        }, 150);
    });
});
