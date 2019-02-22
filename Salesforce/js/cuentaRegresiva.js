
function getRemainTime(dateLimit)
{
    //var fechaLimite = new Date('2019','07','31','10','00','00')
    var now = new Date()
    var remainTime = (new Date(dateLimit) - now + 1000) / 1000
    var remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2)
    var remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2)
    var remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2)
    var remainDays = Math.floor(remainTime / (3600 * 24));
    var time = {now,remainTime,remainSeconds, remainMinutes, remainHours, remainDays}

    return time
};

function conuntdown(dateLimit, elem, finalMessage) {
    const el = document.getElementById(elem)
    const timerUpdate = setInterval( () => {
        let t = getRemainTime(dateLimit)
        el.innerHTML = t.remainDays + "D:" + t.remainHours + "H:" + t.remainMinutes + "M:" + t.remainSeconds + "S";
        $("#" + elem).css({"font-size" : "25pt", "color": "green","align-text":"center"});
        if (t.remainTime <= 1 ) {
            clearInterval(timerUpdate)
            el.innerHTML = finalMessage;
        }
    })
}

conuntdown("Jul 31 2019 13:04:20 GMT-0600","time","Muchas gracias por la espera");