document.getElementById('check').addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  // ここに背景色を変える処理を書く。
  const checkbox = document.getElementById('check');
  const textElement = document.getElementById('text');

  if (checkbox.checked) {
    textElement.style.backgroundColor = 'red';
    } else if (!checkbox.checked) {
    textElement.style.backgroundColor = 'transparent';
  }
}
