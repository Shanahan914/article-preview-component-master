document.addEventListener("DOMContentLoaded", function () {
  const shareBtn = document.getElementsByClassName("share-span")[0];
  const sharePanel = document.getElementById("share-panel");
  const arrow = document.getElementById("arr");
  const pointer = document.getElementById("pointer");
  shareBtn.addEventListener("click", function () {
    if (sharePanel.classList.contains("share-hidden")) {
      sharePanel.classList.remove("share-hidden");
      arrow.setAttribute("fill", "#6E8098");
      if (screen.width < 760) {
        sharePanel.classList.add("share-panel-small");
        shareBtn.classList.add("share-span-dark-small");
        arrow.setAttribute("fill", "white");
        pointer.classList.add("share-hidden");
      } else {
        sharePanel.classList.add("share-panel-large");
        arrow.setAttribute("fill", "white");
        shareBtn.classList.add("share-span-dark");
      }
    } else {
      sharePanel.classList.add("share-hidden");
      arrow.setAttribute("fill", "#6E8098");
      shareBtn.classList.remove("share-span-dark");
      shareBtn.classList.remove("share-span-dark-small");
      sharePanel.classList.remove("share-panel-small");
      sharePanel.classList.remove("share-panel-large");
      pointer.classList.remove("share-hidden");
    }
  });
});
