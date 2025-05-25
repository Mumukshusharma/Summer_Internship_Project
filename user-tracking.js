// This script handles storing the user's anime tracking status using localStorage
const statusDropdown = document.getElementById("watch-status");
const currentStatus = document.getElementById("current-status");

function loadWatchStatus(title) {
  const stored = JSON.parse(localStorage.getItem("anime-status")) || {};
  currentStatus.textContent = stored[title] || "None";

  statusDropdown.value = stored[title] || "";
  statusDropdown.addEventListener("change", () => {
    stored[title] = statusDropdown.value;
    localStorage.setItem("anime-status", JSON.stringify(stored));
    currentStatus.textContent = statusDropdown.value || "None";
  });
}
