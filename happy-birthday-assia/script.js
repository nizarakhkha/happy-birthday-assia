document.addEventListener("DOMContentLoaded", function () {
  const openMessageBtn = document.getElementById("openMessageBtn");
  const backBtn = document.getElementById("backBtn");
  const landingPage = document.getElementById("landingPage");
  const messagePage = document.getElementById("messagePage");
  const typedText = document.getElementById("typedText");

  const message = `I don’t know what to write to let you know what you mean to me…
you were, and you still are, someone very special in my heart.
No matter how things change or how time passes,
there’s always a part of me that keeps you with it.
I wish you happiness, peace, and everything beautiful in life…
because you truly deserve it.💫.`;

  let typingTimeout = null;
  let currentIndex = 0;

  function clearTyping() {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
      typingTimeout = null;
    }
  }

  function typeLetterByLetter(text) {
    clearTyping();
    typedText.innerHTML = '<span class="cursor">|</span>';
    currentIndex = 0;

    function write() {
      if (currentIndex >= text.length) {
        typedText.innerHTML = text.replace(/\n/g, "<br>") + '<span class="cursor">|</span>';
        return;
      }

      const currentText = text.substring(0, currentIndex + 1);
      typedText.innerHTML = currentText.replace(/\n/g, "<br>") + '<span class="cursor">|</span>';

      const currentChar = text[currentIndex];
      currentIndex++;

      let speed = 45;

      if (currentChar === " ") {
        speed = 30;
      } else if (currentChar === "," || currentChar === ";") {
        speed = 180;
      } else if (currentChar === "." || currentChar === "!" || currentChar === "?") {
        speed = 280;
      }

      typingTimeout = setTimeout(write, speed);
    }

    write();
  }

  openMessageBtn.addEventListener("click", function () {
    landingPage.classList.add("hidden");
    messagePage.classList.remove("hidden");
    typeLetterByLetter(message);
  });

  backBtn.addEventListener("click", function () {
    messagePage.classList.add("hidden");
    landingPage.classList.remove("hidden");
    clearTyping();
    typedText.innerHTML = "";
  });
});