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

document.addEventListener("DOMContentLoaded", () => {
    toggleFilter()
    togglePreview()

    actions = Array.from(document.querySelectorAll('[action]'))
    actions.filter(a => a.tagName != "INPUT").forEach(action => {
        action.addEventListener('click', (e) => {
            e.preventDefault();
            switch(e.currentTarget.getAttribute('action')) {
                case "start":
                case "play":
                case "resume":
                case "stop":
                case "next":
                case "toggle-filter":
                case "previous":
                    break;
            }
        })
    })
    actions.filter(a => a.tagName == "INPUT").forEach(action => {
        action.addEventListener('change', (e) => {
            switch(e.currentTarget.getAttribute('action')) {
                case "toggle-preview":
                case "edit-time":
                    break;
            }
        })
    })
})