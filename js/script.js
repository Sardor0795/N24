const elModalWindow = document.querySelector(".modal-window");
const elNotifBtn = document.querySelector("#notif-btn");
const elModalClose = document.querySelector(".js-modal-close");

if (elModalWindow) {
  if (elNotifBtn) {
    elNotifBtn.addEventListener("click", function () {
      elModalWindow.classList.add("modal-open");
    });
  }

  elModalClose.addEventListener("click", function () {
    elModalWindow.classList.remove("modal-open");
  });
}
