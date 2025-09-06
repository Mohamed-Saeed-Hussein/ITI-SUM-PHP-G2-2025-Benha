document.addEventListener('DOMContentLoaded', function () {
  // Project 1: Add Items to a List
  function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemsList = document.getElementById('itemsList');
    if (!itemInput || !itemsList) return;

    const text = itemInput.value;
    if (text.trim() === '') return;

    const li = document.createElement('li');
    li.textContent = text;
    itemsList.appendChild(li);

    itemInput.value = '';
    itemInput.focus();
  }

  function resetList() {
    const itemInput = document.getElementById('itemInput');
    const itemsList = document.getElementById('itemsList');
    if (!itemInput || !itemsList) return;

    itemsList.innerHTML = '';
    itemInput.value = '';
    itemInput.focus();
  }

  document.getElementById('addItemBtn')?.addEventListener('click', addItem);
  document.getElementById('resetBtn')?.addEventListener('click', resetList);


  // Project 2: Random Background Color
  function changeColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'pink'];
    const idx = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[idx];
  }

  document.getElementById('colorBtn')?.addEventListener('click', changeColor);


  // Project 3: Simple Image Toggle
  const imgs = ['../imgs/fan1.webp', '../imgs/fan2.webp', '../imgs/fan3.webp'];
  let imgIndex = 0;

  function toggleImage() {
    const toggleImg = document.getElementById('toggleImg');
    if (!toggleImg) return;

    imgIndex = (imgIndex + 1) % imgs.length;
    toggleImg.classList.add('fade-out');
    setTimeout(() => {
      toggleImg.src = imgs[imgIndex];
      toggleImg.classList.remove('fade-out');
    }, 200);
  }

  document.getElementById('toggleBtn')?.addEventListener('click', toggleImage);


  // Project 4: Mini Counter
  let count = parseInt(document.getElementById('countDisplay')?.textContent, 10) || 0;

  function updateCount() {
    const countDisplay = document.getElementById('countDisplay');
    if (countDisplay) countDisplay.textContent = count;
  }

  function decrement() {
    count--;
    updateCount();
  }

  function increment() {
    count++;
    updateCount();
  }

  document.getElementById('decBtn')?.addEventListener('click', decrement);
  document.getElementById('incBtn')?.addEventListener('click', increment);
});

