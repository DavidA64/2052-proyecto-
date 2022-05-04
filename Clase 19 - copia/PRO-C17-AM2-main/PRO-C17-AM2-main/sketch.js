var Harry
var Guardia, GuardiaFalso
var Guardias 



function preload(){

 

}






function setup(){
  createCanvas(windowWidth,windowHeight)
  Harry = createSprite(300,150,60,60)
   Guardia = createSprite(50,180,60,60)  
   GuardiaFalso = createSprite(50,180,60,60)
  //Guardias= new Group()
  //Guardia.add(Guardias)
 


 

 

  Harry.scale = 0.6
  Guardia.scale =0.6
  GuardiaFalso.scale =0.6
  Guardia.debug = true
  GuardiaFalso.debug = true
  Harry.debug = true 
  Guardia.rotation=360
  GuardiaFalso.rotation=360
  Guardia.setCollider("circle",100,0,100)
  GuardiaFalso.setCollider("circle",50,10,50)
  Harry.setCollider("circle",0,0,30)


 







}



function draw(){
  background("black")
  drawSprites()
  movimientoHarry()
  
     Atrapado()
 
 
}
function movimientoHarry(){
  if(keyDown("W")|| keyDown("w")){
    Harry.y += -5
  }
  if(keyDown("S")|| keyDown("s")){
    Harry.y += 5
  }
  if(keyDown("A")|| keyDown("a")){
    Harry.x +=-5
  }
  if(keyDown("D")|| keyDown("d")){
    Harry.x += 5
  }






}
function Atrapado(){
//if(Harry.isTouching(Guardia)){
  Guardia.x=Harry.x-10
  Guardia.y=Harry.y-10
//}
}


function obstaculosIn(){

  
}

function volar(){

  } 

function reiniciar(){
 
}

function jefeFinal(){
 
}

function balas(){
 
}


function matarJefe(){
 

}











