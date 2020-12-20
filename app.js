var appTabs = [
    "Featured",
    "Utilities",
    "Hacking/Cheats",
    "Games/Emulators",
    "Other",
];

sidebarItem = document.getElementsByClassName("sidebar-item");

for (i = 0; i < sidebarItem.length; i++) {
    sidebarItem[i].setAttribute(
        "onclick",
        'switchTab("' + sidebarItem[i].innerText + '");'
    );
}

function switchTab(tabName, event) {
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
        var appJson = backendGetAppList(tabName);
        appGrid.innerHTML = "";
        appJson.apps.forEach(function(obj) {
            appGrid.innerHTML += `<div class="app-card"><img class="app-icon" src="${obj.Icon}"></img><span class="app-text">${obj.Name}</span><div class="app-btn">Install</div></div>`;
        });
    }
}

function backendGetAppList() {
    return {
        apps: [{
            Name: "DemoApp1",
            Icon: "https://raw.githubusercontent.com/PapirusDevelopmentTeam/papirus-icon-theme/master/Papirus/48x48/apps/firefox.svg",
            CodeName: "DemoApp",
            Package: "https://somewebsite.com/demo.zip",
            EXEPath: "DemoApp1\\demo.exe",
        }, ],
    };
}