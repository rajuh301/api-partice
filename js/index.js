const loaPersons = () => {

  const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };
 displayPersons(person) 
}


const displayPersons = persons => {
    console.log(persons.result[1].age) 
    const personFound = document.getElementById('persons-container');

    const divC = document.createElement('div');
    divC.classList.add('col')
    divC.innerHTML =`

<div class="col d-flex">
    <div class="col-sm-6 container ">
    <div class="card">


        <h5 class="card-title border border-2 px-  bg-secondary text-white shadow-lg">Name: ${persons.result[0].name.common}</h5>


        <div class="card-body">
        <p class="card-text">Age: ${persons.result[0].age}</p>
        <p class="card-text">street: ${persons.result[0].address.street}</p>
          
        </div>
    </div>
</div>

    <div class="col-sm-6 container">
    <div class="card">

    <h5 class="card-title border border-2 px-  bg-secondary text-white shadow-lg">Name: ${persons.result[1].name.common}</h5>



        <div class="card-body">
    
        <p class="card-text">Age: ${persons.result[1].age}</p>

        <p class="card-text">street: ${persons.result[1].address.street}</p>
          
        </div>
    </div>
</div>

</div>
     
    ` 

    personFound.appendChild(divC);


}

loaPersons()


