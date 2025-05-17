function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "regalo ";
    var part_4 = "para ti.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//slice method
function slice_Method(){
    var Sentence = "All work blah blah blah makes Hector a dumb fool.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//TOPRECISION METHOD
function precision_Method(){
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}