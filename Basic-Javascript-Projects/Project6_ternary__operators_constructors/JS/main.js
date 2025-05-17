function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack=new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily=new Vehicle("Subaru", "Outback", 2014, "Green");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model +
    " manufactured in " + Emily.Vehicle_Year;
}