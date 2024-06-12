document.addEventListener("DOMContentLoaded", function () {
  const shareBtn = document.getElementsByClassName("share-span");
  const sharePanel = document.getElementsByClassName("share-panel");
  const arrow = document.getElementById("arr");
  const smallSharePanel =
    document.getElementsByClassName("share-panel-small")[0];
  shareBtn[0].addEventListener("click", function () {
    if (
      sharePanel[0].style.visibility === "visible" ||
      smallSharePanel.style.visibility === "visible"
    ) {
      smallSharePanel.style.visibility = "hidden";
      sharePanel[0].style.visibility = "hidden";
      shareBtn[0].classList.remove("share-span-dark")
      shareBtn[0].classList.remove("share-span-dark-small");
      arrow.setAttribute("fill", "#6E8098");
    } else if (screen.width < 600) {
      smallSharePanel.style.visibility = "visible";
      shareBtn[0].classList.add("share-span-dark-small");
      arrow.setAttribute("fill", "white");
    } else {
      sharePanel[0].style.visibility = "visible";
      shareBtn[0].classList.add("share-span-dark");
      arrow.setAttribute("fill", "white");
    }
  });
});
