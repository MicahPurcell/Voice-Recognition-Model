x = 0;
y = 0;
draw_circle= ''
draw_rectangle= ''

var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition

function start(){

    document.getElementById("status").innerHTML='System is listening, please say circle or rectangle.'
    recognition.start()
}

recognition.onresult = function(event){
    console.log(event);

    
    var content = event.results[0][0].trascript

    if (content=="circle") {
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        draw_circle= "set"
        
        
    }

    if (content=="rectangle") {
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        draw_rectangle= "set"
    }


}

function draw(){

    R= Math.floor(Math.random() * 255)
    G= Math.floor(Math.random() * 255)
    B= Math.floor(Math.random() * 255)
    fill(R,G,B)
    stroke(R,G,B)
    if (draw_circle=='set') {
        radius=Math.floor(Math.random() * 100)
        circle(x,y,radius)
        document.getElementById('status').innerHTML="Circle has been drawn, click draw if you wan to draw another shape."
    }

    if (draw_rectangle=='set') {
        rect(x,y,50,70)
        document.getElementById('status').innerHTML="Rectangle has been drawn, click draw if you wan to draw another shape."

    }
}

function setup(){
    canvas = createCanvas(900,600)
}
