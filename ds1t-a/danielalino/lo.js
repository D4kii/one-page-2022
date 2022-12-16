
    const iconK = document.querySelector('.icon-k');
    const iconRick = document.querySelector('.icon-rick');
    const iconJoi = document.querySelector('.icon-joi');
    const iconMariette = document.querySelector('.icon-mariette');
    const iconLuv = document.querySelector('.icon-luv');
    const iconAna = document.querySelector('.icon-ana')
    const iconJoshi = document.querySelector('.icon-joshi');
    const iconFreysa = document.querySelector('.icon-freysa');
    const iconWallace = document.querySelector('.icon-niander');

    const containerRick = document.getElementById('rick')
    const containerJoi = document.getElementById('joi')
    const containerK = document.getElementById('k')
    const containerMariette = document.getElementById('mariette')
    const containerLuv = document.getElementById('luv')
    const containerAna = document.getElementById('ana')
    const containerJoshi= document.getElementById('joshi')
    const containerFreysa = document.getElementById('freysa')
    const containerWallace = document.getElementById('wallace')


function onRick () {
    
    containerJoi.classList.remove('on')
    containerK.classList.remove ('on')
    containerMariette.classList.remove('on')
    containerLuv.classList.remove ('on')
    containerAna.classList.remove('on')
    containerJoshi.classList.remove ('on')
    containerFreysa.classList.remove ('on')
    containerWallace.classList.remove ('on')
    containerRick.classList.add ('on')
}

function onJoi () {

    containerK.classList.remove ('on')
    containerMariette.classList.remove('on')
    containerLuv.classList.remove ('on')
    containerAna.classList.remove('on')
    containerJoshi.classList.remove ('on')
    containerFreysa.classList.remove ('on')
    containerWallace.classList.remove ('on')
    containerRick.classList.remove('on')
    containerJoi.classList.add ('on')
}
function onMariette () {

    containerK.classList.remove ('on')
    containerJoi.classList.remove('on')
    containerLuv.classList.remove ('on')
    containerAna.classList.remove('on')
    containerJoshi.classList.remove ('on')
    containerFreysa.classList.remove ('on')
    containerWallace.classList.remove ('on')
    containerRick.classList.remove('on')
    containerMariette.classList.add ('on')
}
function onLuv () {

    containerK.classList.remove ('on')
    containerMariette.classList.remove('on')
    containerJoi.classList.remove ('on')
    containerAna.classList.remove('on')
    containerJoshi.classList.remove ('on')
    containerFreysa.classList.remove ('on')
    containerWallace.classList.remove ('on')
    containerRick.classList.remove('on')
    containerLuv.classList.add ('on')
}
function onAna () {

    containerK.classList.remove ('on')
    containerMariette.classList.remove('on')
    containerLuv.classList.remove ('on')
    containerJoi.classList.remove('on')
    containerJoshi.classList.remove ('on')
    containerFreysa.classList.remove ('on')
    containerWallace.classList.remove ('on')
    containerRick.classList.remove('on')
    containerAna.classList.add ('on')
}
function onJoshi () {

    containerK.classList.remove ('on')
    containerMariette.classList.remove('on')
    containerLuv.classList.remove ('on')
    containerAna.classList.remove('on')
    containerJoi.classList.remove ('on')
    containerFreysa.classList.remove ('on')
    containerWallace.classList.remove ('on')
    containerRick.classList.remove('on')
    containerJoshi.classList.add ('on')
}
function onFreysa () {

    containerK.classList.remove ('on')
    containerMariette.classList.remove('on')
    containerLuv.classList.remove ('on')
    containerAna.classList.remove('on')
    containerJoshi.classList.remove ('on')
    containerJoi.classList.remove ('on')
    containerWallace.classList.remove ('on')
    containerRick.classList.remove('on')
    containerFreysa.classList.add ('on')
}
function onWallace () {

    containerK.classList.remove ('on')
    containerMariette.classList.remove('on')
    containerLuv.classList.remove ('on')
    containerAna.classList.remove('on')
    containerJoshi.classList.remove ('on')
    containerFreysa.classList.remove ('on')
    containerJoi.classList.remove ('on')
    containerRick.classList.remove('on')
    containerWallace.classList.add ('on')
}
function onK () {

    containerJoi.classList.remove ('on')
    containerMariette.classList.remove('on')
    containerLuv.classList.remove ('on')
    containerAna.classList.remove('on')
    containerJoshi.classList.remove ('on')
    containerFreysa.classList.remove ('on')
    containerWallace.classList.remove ('on')
    containerRick.classList.remove('on')
    containerK.classList.add ('on')
}

iconRick.addEventListener('click', onRick)
iconJoi.addEventListener('click', onJoi)
iconK.addEventListener('click', onK)
iconMariette.addEventListener('click', onMariette)
iconLuv.addEventListener('click', onLuv)
iconAna.addEventListener('click', onAna)
iconJoi.addEventListener('click', onJoshi)
iconFreysa.addEventListener('click', onFreysa)
iconWallace.addEventListener('click', onWallace)