// 1st: get elements
const player = document.querySelector('.player')
const btn = player.querySelector('.fas')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip')
const ranges = player.querySelectorAll('.player__slider')

// 2nd: build functions
function togglePlay() {
    const method = video.paused ? 'play' : 'pause'
    video[method]()
}

function updateButton(e) {
    /* const icon = this.paused ? (btn.className = 'fas fa-play') : (btn.className = 'fas fa-pause')
    toggle.textContent = icon */
    if (this.paused) {
        btn.classList.remove('fa-pause')
        btn.classList.add('fa-play')
    } else {
        btn.classList.remove('fa-play')
        btn.classList.add('fa-pause')
    }
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += Number(this.dataset.skip)
}

function handleRangeUpdate(e) {
    video[this.name] = this.value
}

function handleProgress() {
    let timePercentage = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${timePercentage}%`
}

function scrub(e) {
    const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration
    video.currentTime = scrubTime
}

// 3rd: hook up the event listeners
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
toggle.addEventListener('click', togglePlay)
skipButtons.forEach(btn => btn.addEventListener('click', skip))
ranges.forEach(btn => btn.addEventListener('change', handleRangeUpdate))
ranges.forEach(btn => btn.addEventListener('mousemove', handleRangeUpdate))
video.addEventListener('timeupdate', handleProgress)

let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)