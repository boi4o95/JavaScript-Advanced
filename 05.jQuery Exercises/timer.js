function timer() {
    let interval = null
    let hour = $('#hours').text()
    let minute = $('#minutes').text()
    let second = $('#seconds').text()

    let startBtn = $('#start-timer').on('click', start)
    let stopBtn = $('#stop-timer').on('click', stop)



    function start() {
        if (interval) {
            clearInterval(interval)
        }
        interval = setInterval(function () {
            second ++
            if (second >= 60) {
                second = 0
                minute++
                if (minute >= 60) {
                    minute = 0
                    hour++
                }
            }
            $('#seconds').text(('0' + second).slice(-2))
            $('#minutes').text(('0' + minute).slice(-2))
            $('#hours').text(('0' + hour).slice(-2))
        }, 1000)

    }

    function stop() {
        clearInterval(interval)
    }
}