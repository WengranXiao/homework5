const video = document.getElementById('videoplayer')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const slower = document.getElementById('slower')
const faster = document.getElementById('faster')
const skip = document.getElementById('skip')
const mute = document.getElementById('mute')
const vol = document.getElementById('slider')
const volumeDisp = document.getElementById('volume')

video.load()
video.autoplay=false
video.loop=false
play.addEventListener(`click`, playVideo)
pause.addEventListener(`click`, pauseVideo)
slower.addEventListener(`click`, slowerVideo)
faster.addEventListener(`click`, fasterVideo)
skip.addEventListener(`click`, skipVideo)
mute.addEventListener(`click`, muteVideo)
vol.addEventListener('input', volVideo)


var playRateList = [0.5,1,2]
var playRateStat = 1
volumeDisp.innerHTML = vol.value+'%'

function playVideo(){
    video.play()
}
function pauseVideo(){
    video.pause()
}
function slowerVideo(){
    if (playRateStat==0) {
        alert("Video is at slowest speed!")
    }
    else {
        playRateStat-=1
        video.playbackRate = playRateList[playRateStat]
    }
}
function fasterVideo(){
    if (playRateStat==2) {
        alert("Video is at fastest speed!")
    }
    else {
        playRateStat+=1
        video.playbackRate = playRateList[playRateStat]
    }
}
function skipVideo(){
    video.currentTime += 15
    if (video.currentTime >=video.duration) {
        video.currentTime = 0
    }
}
function muteVideo(){
    if (video.muted){
        video.muted=false
        mute.innerHTML='Mute'
    }
    else {
        video.muted=true
        mute.innerHTML='Unmute'
    }
}
function volVideo() {
    volumeDisp.innerHTML = vol.value+'%'
    video.volume = vol.value/100
}
