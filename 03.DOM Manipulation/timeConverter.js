function attachEventsListeners() {
    let dayBtn = document.getElementById('daysBtn')
    let hoursBtn = document.getElementById('hoursBtn')
    let minutesBtn = document.getElementById('minutesBtn')
    let secondsBtn = document.getElementById('secondsBtn')

    dayBtn.addEventListener('click', convertDay)
    hoursBtn.addEventListener('click', convertHours)
    minutesBtn.addEventListener('click', convertMinute)
    secondsBtn.addEventListener('click', convertSecond)

    function convertDay() {
        let day = document.getElementById('days').value
        document.getElementById('hours').value = day * 24
        document.getElementById('minutes').value = day * 24 * 60
        document.getElementById('seconds').value = day * 24 * 60 * 60
    }

    function convertHours() {
        let hours = document.getElementById('hours').value
        document.getElementById('days').value = hours / 24
        document.getElementById('minutes').value = hours * 60
        document.getElementById('seconds').value = hours * 3600
    }


    function convertMinute() {
        let minutes = document.getElementById('minutes').value
        document.getElementById('days').value = minutes / (60 * 24)
        document.getElementById('hours').value = Math.round(minutes / 60)
        document.getElementById('seconds').value = minutes * 60
    }

    function convertSecond() {
        let seconds = document.getElementById('seconds').value
        document.getElementById('days').value = seconds / (24 * 60 * 60)
        document.getElementById('hours').value = Math.round(seconds / (60 * 60))
        document.getElementById('minutes').value = Math.round(seconds / 60)
    }
}