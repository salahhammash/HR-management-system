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

let newArr = []
function Emploee(FullName, Department, Level, ImageURL) {
  this.id = 0
  this.name = FullName
  this.Department = Department
  this.level = Level
  this.ImageURL = ImageURL
  this.Salary = 0
  newArr.push(this)
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




function render() {

  const contAiner = document.getElementById("info");
  contAiner.innerHTML = "";
  // getEmploee();

  if (newArr == null) {
    newArr = []
  }

  for (let i = 0; i < newArr.length; i++) {

    const theDiv = document.createElement("div")
    theDiv.classList.add("imgg")
    contAiner.appendChild(theDiv)
    // theDiv.style.padding= 10px


    // display his img
    const newImg = document.createElement("img")
    theDiv.appendChild(newImg)
    newImg.setAttribute("src", newArr[i].ImageURL)
    newImg.width = "150"
    newImg.height = "150"


    //display the name of emploee

    const namE = document.createElement("h1")
    theDiv.appendChild(namE)
    namE.textContent = newArr[i].name


    //display his department
    const DeparTment = document.createElement("p")
    theDiv.appendChild(DeparTment)
    DeparTment.textContent = newArr[i].Department


    // display his level
    const level = document.createElement("p")
    theDiv.appendChild(level)
    level.textContent = newArr[i].level


    //display his salary
    const sa = document.createElement("p")
    theDiv.appendChild(sa)
    sa.textContent = `salary is : ${Math.floor(newArr[i].Salary)}$`

    //display id

    const idd = document.createElement("p")
    theDiv.appendChild(idd)
    idd.textContent = `id is : ${newArr[i].id}`


    // const li =document.createElement("hr")
    // theDiv.appendChild(li)



  }

}





let fullInformation = document.getElementById("form08")
fullInformation.addEventListener("submit", addNewInfo);

function addNewInfo(event) {
  event.preventDefault();
  // console.log("heloo from add");

  let newNAme = event.target.name.value
  let dep = event.target.Departmentt.value
  let lev = event.target.Levell.value
  let Imagg = event.target.imgUrll.value || "./imges/anger-management-.jpeg"



  let final = new Emploee(newNAme, dep, lev, Imagg)

  final.calculateSalary()
  final.idNum()

  // final.render()

  //convert into json then store the array 

  let jason1 = JSON.stringify(newArr)
  localStorage.setItem('allEmploee', jason1)


  render()


}



Emploee.prototype.idNum = function () {

  this.id = Math.floor(Math.random() * 10000)

  return this.id

}


function getEmploee() {



  let jason1 = localStorage.getItem('allEmploee')
  newArr = JSON.parse(jason1)


}


getEmploee();




render();



