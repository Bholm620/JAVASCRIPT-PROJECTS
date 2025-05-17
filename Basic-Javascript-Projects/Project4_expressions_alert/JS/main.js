function my_Dictionary() {
    var Guitar = {
        Make: "Gibson",
        Model: "Les Paul",
        Year: 1959,
        Color: "Sunburst"
    };
    document.getElementById("Dictionary").innerHTML = Guitar.Model + 
    " is a " + Guitar.Color + " " + Guitar.Make + " " + Guitar.Model + 
    " from " + Guitar.Year + ".";

}