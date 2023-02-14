`use stric`

// function Emploee(EmploeeID, FullName, Department, Level, ImageURL, Salary) {

//   this.NumberID = EmploeeID
//   this.Name = FullName
//   this.Department = Department
//   this.Level = Level
//   this.imgUrl = ImageURL
//   this.Salary = Salary
//   this.netSalary = Salary - (Salary * (7.5 / 100))
//   Emploee.fullInfo.push(this)
// }


function Emploee( FullName, Department, Level, ImageURL ) {
  this.id = 0
  this.name = FullName
  this.Department = Department
  this.level = Level
  this.ImageURL = ImageURL
  this.Salary = 0

}

//calculate the salary

Emploee.prototype.calculateSalary = function () {
  if (this.level === "Junior") {
    this.Salary = Math.floor(Math.random() * (1000 - 500 + 1) + 500) * (1 - 0.07);
  }

  else if (this.level === "Mid-Senior") {
    this.Salary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000) * (1 - 0.07);
  }
  if (this.level === "Senior") {
    this.Salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500) * (1 - 0.07);
  }
  return this.Salary
}




Emploee.prototype.render = function () {

  const contAiner = document.getElementById("info")


  const theDiv = document.createElement("div")
theDiv.classList.add("imgg")
  contAiner.appendChild(theDiv)
// theDiv.style.padding= 10px

    // display his img
    const newImg = document.createElement("img")
    theDiv.appendChild(newImg)
    newImg.setAttribute("src", this.ImageURL)
    newImg.width = "150"
    newImg.height = "150"
  

  //display the name of emploee

  const namE = document.createElement("h1")
  theDiv.appendChild(namE)
  namE.textContent = this.name


//display his department
  const DeparTment = document.createElement("p")
  theDiv.appendChild(DeparTment)
  DeparTment.textContent = this.Department


  // display his level
  const level = document.createElement("p")
  theDiv.appendChild(level)
  level.textContent = this.level


//display his salary
  const sa = document.createElement("p")
  theDiv.appendChild(sa)
  sa.textContent =`salary is : ${Math.floor(this.Salary)}$`

//display id

const idd = document.createElement("p")
theDiv.appendChild(idd)
idd.textContent = `id is : ${this.id}`


// const li =document.createElement("hr")
// theDiv.appendChild(li)



}





let fullInformation = document.getElementById("form08")
fullInformation.addEventListener("submit", addNewInfo);

function addNewInfo (event){
event.preventDefault();
  // console.log("heloo from add");

  let newNAme =event.target.name.value
  let dep = event.target.Departmentt.value
  let lev = event.target.Levell.value
  let Imagg = event.target.imgUrll.value || "./imges/anger-management-.jpeg"




let final= new Emploee (newNAme,dep,lev,Imagg)

final.calculateSalary()
final.idNum()

final.render()



}



Emploee.prototype.idNum = function(){

this.id =Math.floor(Math.random()*10000)

  return this.id

}







// Emploee.fullInfo = []




// let employees = [{
//   "id": 100,
//   "fullName": "Ghazi Samer",
//   "Department": "Administration",
//   "Level": "Senior",
//   "imgUrl": null
// },
// {
//   "id": 1001,
//   "fullName": "Lana Ali",
//   "Department": "Finance",
//   "Level": "Senior",
//   "imgUrl": null
// },
// {
//   "id": 1002,
//   "fullName": "Tamara Ayoub",
//   "Department": "Marketing",
//   "Level": "Senior",
//   "imgUrl": null

// },
// {
//   "id": 1003,
//   "fullName": "Safi Walid",
//   "Department": "Administration",
//   "Level": "Mid-Senior",
//   "imgUrl": null

// },

// {
//   "id": 1004,
//   "fullName": "Omar Zaid",
//   "Department": "Development",
//   "Level": "Senior",
//   "imgUrl": null

// },


// {
//   "id": 1005,
//   "fullName": "Rana Saleh",
//   "Department": "Development",
//   "Level": "Junior",
//   "imgUrl": null

// },
// {
//   "id": 1006,
//   "fullName": "Hadi Ahmad",
//   "Department": "Finance",
//   "Level": "Mid-Senior",
//   "imgUrl": null

// }
// ]


// for (let i = 0; i < employees.length; i++) {
//   let obj = employees[i];
//   let salary;
//   switch (obj.Level) {
//     case "Senior":
//       salary = getRandomNumber(1500, 2000);
//       break;
//     case "Mid-Senior":
//       salary = getRandomNumber(1000, 1500);
//       break;
//     case "Junior":
//       salary = getRandomNumber(500, 1000);
//       break;
//   }

//   let employee = new Emploee(obj.id, obj.fullName, obj.Department, obj.Level, obj.imgUrl, salary);

// }


// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);

// }


// let a = document.getElementById("par")


// for (let i = 0; i < Emploee.fullInfo.length; i++) {

//   c = document.createElement("p")

//   c.innerHTML = ` Name is : ${Emploee.fullInfo[i].Name} & the salary is : ${Emploee.fullInfo[i].Salary} `

  // a.appendChild(c)
// }



// Emploee.prototype.newInformintion = function(){

//   document.write ( `<p> Name is : ${employee.Name} & the salary is : ${employee.Salary} </p>`)
// }





