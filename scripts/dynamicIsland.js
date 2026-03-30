const island = document.getElementById("island");
const statusView = document.getElementById("island-status");
const searchView = document.getElementById("island-search");
const expandedView = document.getElementById("island-expanded");

const textEl = document.getElementById("island-text");
const input = document.getElementById("search-input");

let mode = "idle";
let expanded = false;


function setMode(newMode) {
    mode = newMode;

    statusView.classList.remove("active");
    searchView.classList.remove("active");

    if (mode === "idle") statusView.classList.add("active");
    if (mode === "search") searchView.classList.add("active");
}


function setIsland(text) {
    textEl.style.opacity = "0";

    setTimeout(() => {
        textEl.innerText = text;
        textEl.style.opacity = "1";
    }, 150);
}



function openSearch() {
    if (mode === "search") return;

    setMode("search");

    island.style.width = "240px";
    collapseIsland();

    setTimeout(() => input.focus(), 200);
}

function closeSearch() {
    setMode("idle");
    island.style.width = "140px";
}


function expandIsland(contentHTML) {
    expanded = true;

    island.classList.add("expanded");
    island.style.height = "35px";

    expandedView.innerHTML = contentHTML;
    expandedView.style.opacity = "1";

    const input = island.querySelector("input");
    if(input) {
        input.style.width = "calc(100% - 10px)";
    }
}

function collapseIsland() {
    expanded = false;

    island.classList.remove("expanded");
    island.style.height = "35px";

    expandedView.style.opacity = "0";

    setTimeout(() => {
        expandedView.innerHTML = "";
    }, 300);
}


function notify(text) {
    expandIsland(`
        <div class="island-card">
            🔔 ${text}
        </div>
    `);

    setTimeout(() => {
        collapseIsland();
    }, 3000);
}


function nowPlaying(title, artist) {
    expandIsland(`
        <div class="island-card">
            🎵 <strong>${title}</strong><br>
            <small>${artist}</small>
        </div>
    `);
}


function aiResponse(prompt) {
    expandIsland(`
        <div class="island-card">
            🧠 Thinking...
        </div>
    `);

    setTimeout(() => {
        expandedView.innerHTML = `
            <div class="island-card">
                🧠 ${generateFakeAI(prompt)}
            </div>
        `;
    }, 1200);
}

function generateFakeAI(input) {
    const responses = [
        "Interesting 👀",
        "I like that idea 😏",
        "Try thinking simpler 💡",
        "That might work 🔥",
        "Hmm... not bad 🤔"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}




island.addEventListener("click", (e) => {
    if (expanded) return;

    if (mode === "idle") openSearch();
});

document.addEventListener("click", (e) => {
    if (!island.contains(e.target)) {
        closeSearch();
        collapseIsland();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeSearch();
        collapseIsland();
    }
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const value = input.value.trim();

        if (!value) return;

        aiResponse(value);
        closeSearch();
        input.value = "";
    }
});

input.addEventListener("blur", () => {
    setTimeout(() => closeSearch(), 100);
});



island.addEventListener("mouseenter", () => {
    if (mode === "idle") setIsland("🔍 Click to search");
});

island.addEventListener("mouseleave", () => {
    if (mode === "idle") setIsland("/ᐠ - ˕ -マᶻ𝗓 𐰁 #Idle");
});


setTimeout(() => notify("Welcome 👋"), 20);
setTimeout(() => nowPlaying("Lofi Beat", "Unknown"), 6000);