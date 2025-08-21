const inputValue = document.getElementById('user-input');
const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelectorAll('.operations');

numbers.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (inputValue.innerText === '0' || inputValue.innerText === 'NaN') {
      inputValue.innerText = '';
    }
    inputValue.innerText += e.target.innerText.trim();
  });
});

operations.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const action = e.target.innerText;
    const current = inputValue.innerText;
    const lastChar = current[current.length - 1];

    if (action === 'AC') {
      inputValue.innerText = '0';
    } else if (action === 'DEL') {
      inputValue.innerText = current.slice(0, -1) || '0';
    } else if (action === '=') {
      try {
        const result = eval(current);
        inputValue.innerText = result ?? 'NaN';
      } catch {
        inputValue.innerText = 'NaN';
      }
    } else {
      // Prevent double operators
      if (['+', '-', '*', '/', '%'].includes(lastChar) && isNaN(action)) return;
      inputValue.innerText += action;
    }
  });
});
