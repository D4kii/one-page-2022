
const iconK = document.querySelector('icon-k');
const iconRick = document.querySelector('icon-rick');
const iconJoi = document.querySelector('icon-joi');
const iconMariette = document.querySelector('icon-mariette');
const iconLuv = document.querySelector('icon-luv');
const iconAna = document.querySelector('icon-ana')
const iconJoshi = document.querySelector('icon-joshi');
const iconFreysa = document.querySelector('icon-freysa');
const iconWallace = document.querySelector('icon-niander');


function onRick () {
    const container = document.getElementById('rick')
    const containerJoi = document.getElementById('joi')
    const containerK = document.getElementById('k')
    const containerMariette = document.getElementById('mariette')
    const containerLuv = document.getElementById('luv')
    const containerAna = document.getElementById('ana')
    const containerJoshi= document.getElementById('joshi')
    const containerFreysa = document.getElementById('freysa')
    const containerWallace = document.getElementById('wallace')

    containerJoi.classList.remove('on')
    containerK.classList.remove ('on')
    containerMariette.classList.remove('on')
    containerLuv.classList.remove ('on')
    containerAna.classList.remove('on')
    containerJoshi.classList.remove ('on')
    containerFreysa.classList.remove ('on')
    containerWallace.classList.remove ('on')
    container.classList.add ('on')
}

function onJoi () {
    const container = document.getElementById('joi')
    const containerRick = document.getElementById('rick')
    const containerK = document.getElementById('k')
    const containerMariette = document.getElementById('mariette')
    const containerLuv = document.getElementById('luv')
    const containerAna = document.getElementById('ana')
    const containerJoshi= document.getElementById('joshi')
    const containerFreysa = document.getElementById('freysa')
    const containerWallace = document.getElementById('wallace')

    containerK.classList.remove ('on')
    containerMariette.classList.remove('on')
    containerLuv.classList.remove ('on')
    containerAna.classList.remove('on')
    containerJoshi.classList.remove ('on')
    containerFreysa.classList.remove ('on')
    containerWallace.classList.remove ('on')
    containerRick.classList.remove('on')
    container.classList.add ('on')
}

iconRick.addEventListener('click', onRick)
iconJoi.addEventListener('click', onJoi)