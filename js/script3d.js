const model = document.querySelector('#defender');
const isMobile = window.matchMedia('(max-width: 600px)').matches;
const mobileZoom = 110 / 70; // matches the -1.1rad 1.4rad 70% -> 110% default below

if (isMobile) {
    model.cameraOrbit = '-1.1rad 1.4rad 110%';
}

function setOrbit(orbit){
    if (isMobile) {
        orbit = orbit.replace(/(\d+(?:\.\d+)?)%/, (_, pct) => `${Math.round(pct * mobileZoom)}%`);
    }
    model.cameraOrbit = orbit;
    console.log(orbit);
}

const infoDialog = document.querySelector('#infoDialog');
const infoTitle = document.querySelector('#infoTitle');
const infoDesc = document.querySelector('#infoDesc');

document.querySelectorAll('.Hotspot').forEach(hotspot => {
    hotspot.addEventListener('click', () => {
        infoTitle.textContent = hotspot.dataset.title;
        infoDesc.textContent = hotspot.dataset.description;
        infoDialog.showModal();
    });
});

document.querySelector('#infoClose').addEventListener('click', () => infoDialog.close());


