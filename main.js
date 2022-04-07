let form = document.querySelector("form")

let timerUpdate;

form.addEventListener("submit", (event) =>{

    event.preventDefault();

    clearTimeout(timerUpdate)
    countdown(document.getElementById("fecha2").value, 'clock')

    console.log(document.getElementById("fecha2").value)
})

const countdown = (deadline, elem) => {
    const element = document.getElementById(elem);

    timerUpdate = setInterval(() => {
        let timer = getRemainTime(deadline)

        element.innerHTML = `${timer.remainDays}:${timer.remainHours}:${timer.remainMinutes}:${timer.remainSeconds}`
        
        if(timer.remainTime <= 1){
            clearInterval(timerUpdate)
            element.innerHTML = `Tiempo Agotado`
        }
    }, 1000) 
}

const getRemainTime = deadline =>{

    let now = new Date();

    let remainTime = (new Date(deadline) - now + 1000) / 1000;

    if(remainTime < 1)
    {
        alert("Estas introduciendo una fecha menor")
        clearTimeout(timerUpdate)
        countdown('2023-01-01T09:30', 'clock')
        return -1;
    }

    let remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2); // segundos
    let remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2); // minutos
    let remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2); // horas
    let remainDays = Math.floor(remainTime / (3600 * 24)) // dias

    return { remainTime, remainSeconds, remainMinutes, remainHours, remainDays }
};