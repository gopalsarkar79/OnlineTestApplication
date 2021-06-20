var i = 0;
var correctCount = 0;
generate(0);

function generate(index){
    document.getElementById("Question").innerHTML = jsonData[index].q ;
    document.getElementById("optt1").innerHTML = jsonData[index].opt1 ;
    document.getElementById("optt2").innerHTML = jsonData[index].opt2 ;
    document.getElementById("optt3").innerHTML = jsonData[index].opt3 ;
    
}

function CheckAnswer(){
    if(document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer){
        correctCount++;
    }
    if(document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer){
        correctCount++;
    }
    if(document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer){
        correctCount++;
}
i++;
if(jsonData.length-1 < i){
    document.write("<body style = 'background-color:indigo;'>");
    document.write("<p style='color: #ffffff; font-size:18pt;'>***Your Score is : "+correctCount+"*** </p>")
    document.write("</body>")
}

generate (i);
}
