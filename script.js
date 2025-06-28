var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);


 const slider = document.getElementById('slider');
    const container = slider.parentElement;

    let isDragging = false;
    let startX, currentX;

    slider.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      currentX = e.clientX - startX;
      const max = container.offsetWidth - slider.offsetWidth;
      currentX = Math.max(0, Math.min(currentX, max));
      slider.style.left = currentX + 'px';

      // Optional: Hide text as you drag
      if (currentX > 20) {
        document.getElementById('swipeText').style.opacity = '0.4';
      } else {
        document.getElementById('swipeText').style.opacity = '1';
      }
    });

    document.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;

      const max = container.offsetWidth - slider.offsetWidth;
      if (currentX >= max - 10) {
        alert('Confirmed!');
        // Optionally: Lock the slider at the end
        slider.style.left = max + 'px';
      } else {
        // Snap back
        slider.style.left = '0px';
        document.getElementById('swipeText').style.opacity = '1';
      }
    });