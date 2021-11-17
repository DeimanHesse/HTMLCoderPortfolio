function parallax (event) {
    this.querySelectorAll('.layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        layer.style.transform = 'translateX('+(event.clientX-500)*speed/50 + 'px)'; 
    });
}
document.addEventListener('mousemove', parallax);