const allAdvice = () =>{

    const url = 'https://api.adviceslip.com/advice'

    fetch(url)
    .then(res => res.json())
    .then(data =>showAdvice(data))
}


const showAdvice = advice =>{
    
    console.log(advice.slip.advice);

document.getElementById('show-id').innerText = `ID: ${advice.slip.id}`

document.getElementById('show-advice').innerText = `Advice: ${advice.slip.advice}`

   

}



allAdvice()