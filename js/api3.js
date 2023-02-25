const AllCounters = (searchText) =>{

    const url = `https://restcountries.com/v3.1/name/${searchText}`

    fetch(url)
    .then(res => res.json())
    .then(data =>displayCountery(data))
}




const displayCountery = counterys =>{

    const allCountries = document.getElementById('show-countery')
    allCountries.innerText = '';
    counterys.forEach(countery => {
        console.log(countery.area)

        const makeDiv = document.createElement('div');
        makeDiv.classList.add('countery')
        makeDiv.innerHTML = `

        <div class="col">
        <div class="card">
            <img src="${countery.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Country Name : ${countery.name.common}</h5>
                <p class="card-text">Country Code : ${countery.area} </p>
            </div>
        </div>
    </div>
            `;

        allCountries.appendChild(makeDiv)

        
    });

}



const africa =() =>{
    AllCounters('africa')
}

const united =() =>{
    AllCounters('united')
}

const america =() =>{
    AllCounters('america')
}




