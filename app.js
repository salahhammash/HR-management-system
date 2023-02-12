

function Emploee(EmploeeID, FullName, Department, Level, ImageURL, Salary) {

  this.NumberID = EmploeeID
  this.Name = FullName
  this.Department = Department
  this.Level = Level
  this.imgUrl = ImageURL
  this.Salary = Salary
  this.netSalary = Salary - (Salary * (7.5 / 100))
  Emploee.fullInfo.push(this)
}

Emploee.fullInfo = []


let employees = [{
  "id": 100,
  "fullName": "Ghazi Samer",
  "Department": "Administration",
  "Level": "Senior",
  "imgUrl": null
},
{
  "id": 1001,
  "fullName": "Lana Ali",
  "Department": "Finance",
  "Level": "Senior",
  "imgUrl": null
},
{
  "id": 1002,
  "fullName": "Tamara Ayoub",
  "Department": "Marketing",
  "Level": "Senior",
  "imgUrl": null

},
{
  "id": 1003,
  "fullName": "Safi Walid",
  "Department": "Administration",
  "Level": "Mid-Senior",
  "imgUrl": null

},

{
  "id": 1004,
  "fullName": "Omar Zaid",
  "Department": "Development",
  "Level": "Senior",
  "imgUrl": null

},


{
  "id": 1005,
  "fullName": "Rana Saleh",
  "Department": "Development",
  "Level": "Junior",
  "imgUrl": null

},
{
  "id": 1006,
  "fullName": "Hadi Ahmad",
  "Department": "Finance",
  "Level": "Mid-Senior",
  "imgUrl": null

}
]

for (let i = 0; i < employees.length; i++) {
  let obj = employees[i];
  let salary;
  switch (obj.Level) {
    case "Senior":
      salary = getRandomNumber(1500, 2000);
      break;
    case "Mid-Senior":
      salary = getRandomNumber(1000, 1500);
      break;
    case "Junior":
      salary = getRandomNumber(500, 1000);
      break;
  }

  let employee = new Emploee(obj.id, obj.fullName, obj.Department, obj.Level, obj.imgUrl, salary);

}


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}




let a = document.getElementById("par")


for (let i = 0; i < Emploee.fullInfo.length; i++) {

  c = document.createElement("p")

  c.innerHTML = ` Name is : ${Emploee.fullInfo[i].Name} & the salary is : ${Emploee.fullInfo[i].Salary} `

  a.appendChild(c)
}



// Emploee.prototype.newInformintion = function(){

//   document.write ( `<p> Name is : ${employee.Name} & the salary is : ${employee.Salary} </p>`)
// }























