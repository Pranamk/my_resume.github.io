
//paragraph
const paragraphs = document.querySelectorAll('.paragraph');
paragraphs.forEach(paragraph => {
  const words = paragraph.textContent.split(' ');
  paragraph.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');
});

//letter
document.getElementById("openBtn").addEventListener("click", function() {
  document.getElementById("coverLetterPopup").style.display = "block";
  document.body.classList.add("blur-background");
});

document.querySelector(".closeBtn").addEventListener("click", function() {
  document.getElementById("coverLetterPopup").style.display = "none";
  document.body.classList.remove("blur-background");
});




window.addEventListener('DOMContentLoaded', function() {
  var dynamicMessage = document.getElementById('dynamicMessage');
  
  function checkScreenSize() {
      if (window.innerWidth >= 600) {
          dynamicMessage.style.display = 'none';
      } else {
          dynamicMessage.style.display = 'block';
      }
  }
  
  // Check screen size on page load
  checkScreenSize();
  
  // Check screen size on window resize
  window.addEventListener('resize', checkScreenSize);
});





