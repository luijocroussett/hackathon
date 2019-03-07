chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  document.querySelector("#comments").style.display = "none";
  document.querySelector("#secondary").style.display = "none";
  document.querySelector("#sections").style.display = "none";
  document.querySelector("#guide-icon").style.display = "none";
  document.querySelector("#buttons").style.display = "none";
  document.querySelector("#info-contents").style.display = "none";
  document.querySelector("#meta-contents").style.display = "none";
  document.querySelector("#logo-icon-container").style.display = "none";
  document.querySelector("#ticket-shelf").style.display = "none";
  document.querySelector("#merch-shelf").style.display = "none";
  const logo = document.createElement("img");
  logo.setAttribute(
    "src",
    ""
    // "https://img.icons8.com/plasticine/100/000000/youtube-play.png"
  );
  logo.setAttribute("height", "70px");
  const container = document.querySelector("#logo");
  container.appendChild(logo);
  console.log("HI");
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.greeting == "hello") sendResponse({ farewell: "goodbye" });
});
