document.addEventListener("DOMContentLoaded",function(){
    var directoryBarContainer = document.createElement("div");
    directoryBarContainer.className = "directory-bar-container";

    var directoryBarContent = document.createElement("div");
    directoryBarContent.innerHTML = '<object data="/html/content.html"></object>';

    directoryBarContainer.appendChild(directoryBarContent);

    document.body.insertBefore(directoryBarContainer, document.body.firstChild); 
})