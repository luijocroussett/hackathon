document.addEventListener("DOMContentLoaded", () => {
  const div = document.createElement("div");
  div.className = "main";
  const logo = document.createElement("img");
  logo.setAttribute("src", "img/youtube-play.png");
  div.appendChild(logo);
  console.log(logo);
  const text = document.createElement("section");
  text.innerText = "just you_tube";
  div.appendChild(text);
  document.querySelector("body").appendChild(div);

  logo.addEventListener("mouseover", event => {
    event.target.style.opacity = 0.6;
    event.target.style.cursor = "pointer";
  });
  logo.addEventListener("mouseout", event => {
    event.target.style.opacity = 1;
  });
  logo.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, function(
        response
      ) {
        console.log("hi");
      });
    });
  });
});
