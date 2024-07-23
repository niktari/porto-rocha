const c = document.getElementById('container');
const s = document.getElementById('special');

c.onmouseover = () => {
    const span = document.createElement('span');
    span.textContent = 'o';
    s.appendChild(span);

    setTimeout(() => {
        if (span.parentNode) {
            span.parentNode.removeChild(span);
        }
    }, 1000);

    span.style.color = `hsl(${Math.random() * 360} 100% 60%)`

    console.log(span)
}