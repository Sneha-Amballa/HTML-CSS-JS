function showAsciiCode() {
    const char = document.getElementById("charInput").value;
    const outputElement = document.getElementById("output");
    
    if (char.length === 1) {
      const ascii = char.charCodeAt(0);
      outputElement.textContent = `ASCII Code: ${ascii}`;
      outputElement.classList.add('highlight');
      
      if (ascii < 32 || ascii === 127) {
        outputElement.textContent += " (Control Character)";
      }
    } else {
      outputElement.textContent = "Please enter a single character";
      outputElement.classList.remove('highlight');
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById("charInput");
    inputElement.addEventListener('input', showAsciiCode);
    inputElement.addEventListener('focus', () => {
      inputElement.value = '';
      document.getElementById("output").textContent = '';
    });
    
    document.querySelector('.container').style.opacity = 0;
    setTimeout(() => {
      document.querySelector('.container').style.transition = 'opacity 0.5s ease';
      document.querySelector('.container').style.opacity = 1;
    }, 100);
  });