var appTabs = [
    "Featured",
    "Utilities",
    "Hacking/Cheats",
    "Games/Emulators",
    "Other",
];
var queue;

const sidebarItems = document.querySelectorAll(".sidebar-item");
for (const item of sidebarItems) {
    item.setAttribute("onclick", `switchTab('${item.innerText}')`);
}

async function switchTab(tabName) {
    var infoPanel = document.querySelector(".main-info-panel");
    var dynamicTitle = document.querySelector(".dynamicAppTitle");
    var dwnlPanel = document.querySelector(".dynamicDownloadsPanel");
    dwnlPanel.style.display = "none";
    infoPanel.style.display = "none";
    dynamicTitle.innerText = tabName;
    var isAppTab = false;
    appTabs.forEach(function(t) {
        if (tabName == t) {
            isAppTab = true;
        }
    });
    if (isAppTab) {
        document.querySelector(".dynamicAppPanel").style.display = "flex";
        var appGrid = document.querySelector(".dynamicAppGrid");
        var appJson = JSON.parse(await csAPI.getProp("appdist"));
        var tabAppJson = [];
        appJson.forEach(function(obj) {
            if (obj.Category == tabName) {
                tabAppJson.push(obj);
            }
        });
        appGrid.innerHTML = "";
        tabAppJson.forEach(function(obj) {
            appGrid.innerHTML += `<div class="app-card"><img class="app-icon" src="${obj.Icon}"></img><span class="app-text">${obj.Name}</span><div class="app-btn" onclick="alert('owo');">Install</div></div>`;
        });
    } else if (tabName == "Downloads") {
        dwnlPanel.style.display = "flex";
        document.querySelector(".dynamicAppPanel").style.display = "none";
        var dwnlGrid = document.querySelector(".dynamicDownloadsGrid");
    }
}

function toggleDwnlPanel() {
    var fabPanel = document.querySelector(".dwnl-panel");
    if (fabPanel.style.display == "none") {
        fabPanel.style.display = "flex";
    } else {
        fabPanel.style.display = "none";
    }
}

function reload() {
    window.location.reload();
}

function installQueue(eventType, appID) {}