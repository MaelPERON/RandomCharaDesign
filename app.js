var images = [];
var actions = [];
var inputs = [];
var filterOn = true;
var previewOn = true;

function restart() {}
function togglePause() {}
function move() {}
function stop() {}
function toggleFilter() {}
function togglePreview() {}
function newAction(e) {
    obj = e.currentTarget;
    switch(obj.getAttribute('action')) {
        case "start":
        case "play":
        case "resume":
        case "stop":
        case "next":
        case "toggle-filter":
        case "toggle-preview":
        case "previous":
        case "edit-time":
            alert(obj.getAttribute('action'))
            break;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    toggleFilter()
    togglePreview()

    actions = Array.from(document.querySelectorAll('[action]'))
    actions.filter(a => a.tagName != "INPUT").forEach(action => {
        action.addEventListener('click', (e) => { e.preventDefault(); newAction(e); })
    })
    actions.filter(a => a.tagName == "INPUT").forEach(action => {
        action.addEventListener('change', (e) => { newAction(e); })
    })
})