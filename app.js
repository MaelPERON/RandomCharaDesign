var images = [];
var viewerImage;
var viewerText;
var previewImage;
var index = -1;
var actions = [];
var inputs = [];
var filterOn = true;
var previewOn = true;

function restart() {}
function togglePause() {}
function move() {}
function stop() {}
function randomImage() { return "https://picsum.photos/1920/1080" }
function setFilterMode(mode=false) {}
function setPreviewMode(mode=false) { document.querySelector('.preview-wrapper').style.display = mode ? "block" : "none"; document.querySelector('.preview-toggle').style['border-radius'] = `10px${mode ? " 10px 0 0" : ''}`; previewOn = mode; }

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
    viewerImage = document.querySelector('#viewer-img')
    viewerText = document.querySelector('#viewer-text')
    previewImage = document.querySelector('#preview-img')

    setPreviewMode(document.querySelector('[action="toggle-preview"]').checked)
    setFilterMode(false)

    actions = Array.from(document.querySelectorAll('[action]'))
    actions.filter(a => a.tagName != "INPUT").forEach(action => {
        action.addEventListener('click', (e) => { e.preventDefault(); newAction(e); })
    })
    actions.filter(a => a.tagName == "INPUT").forEach(action => {
        action.addEventListener('change', (e) => { newAction(e); })
    })
})