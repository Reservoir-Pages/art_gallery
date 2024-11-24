export function changeBtnVisible(btnSelector) {
  const btns = document.querySelectorAll(btnSelector);

  btns.forEach((btn) => {
    const href = btn.getAttribute("href").split("#")[1];
    const targetEl = document.getElementById(href);

    if (targetEl) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });
}
