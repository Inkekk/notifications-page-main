const notificationCounter = document.querySelector(
  ".notifications-unread-counter"
);
const notificationsUnread = document.querySelectorAll(".unread");
const markAllButton = document.querySelector(".read-all-notifications");

console.log(notificationsUnread.length);

notificationCounter.textContent = notificationsUnread.length;

markAllButton.addEventListener("click", () => {
  notificationsUnread.forEach((notification) => {
    notification.classList.remove("unread");
    notificationCounter.textContent = "0";
  });
});
