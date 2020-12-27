var appTabs = [
    "Featured",
    "Utilities",
    "Hacking/Cheats",
    "Games/Emulators",
    "Other",
];
var queue

const sidebarItems = document.querySelectorAll(".sidebar-item")
for (const item of sidebarItems) {
  item.setAttribute("onclick", `switchTab('${item.innerText}')`);
}


async function switchTab(tabName) {
    console.log("called")
    var infoPanel = document.querySelector(".main-info-panel");
    infoPanel.style.display = "none";
    var isAppTab = false;
    appTabs.forEach(function(t) {
        if (tabName == t) {
            isAppTab = true;
        }
    });
    if (isAppTab) {
        document.querySelector(".dynamicAppPanel").style.display = "flex";
        document.querySelector(".dynamicAppTitle").innerText = tabName;
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
    }
}

function reload() {
	window.location.reload();
}

function installQueue(eventType, appID) {
    
}