
   window.addEventListener('load', function() {
    let xt = document.getElementById('ATR');    
    EventEmitter.on(xt);
    var EventName = document.getElementById ('btnPrueba');
   EventEmitter = new EventEmitter();  
    EventEmitter.emit (EventName);    
EventEmitter.off (EventName);
// SI SE COMENTA EVENT EMITER.OFF FUCIONA EL EVENT.EMIT
       }
    
)
class logger{
    constructor(){          
     }
     static log(info,pelicula) {
         console.log ("The "+info +"event has been emitted")
            console.log ("You are watching "+pelicula);
     }


 }

 
const EventName = document.getElementById('Evento01');

class actor{
    constructor(nameactor , ageactor){
    
     this.nameactor= nameactor;
     this.ageactor =ageactor;}
 }

class movie extends actor {
    constructor(title , year, duration,)
        {super();
    this.title =title;
    this.year =year;
    this.duration =duration;
    }
    datos () {
        console.log(this.title,this.year,this.duration)
    }
    play (pelicula) {
        var quehace = "play";
        logger.log(quehace,pelicula)              
        
        
    }
    pause (){
        console.log(this.title,'PAUSE MOVIE')
    }
    resumen (){
        console.log(this.title,'RESUME MOVIE')
    }
    addCast (cast)
    { 
        
        actor3s.push (cast);
        console.log(JSON.stringify (actor3s))      
                 ;
        
    }
}
function nombrevento (IDEVENT){
    alert ('El nombre del evento es' + IDEVENT);
}
var actor3s = [];



class EventEmitter extends movie {
    constructor (){
        super()
    }
static on (EventName)
{EventName.addEventListener ("click", displayDate);
           function displayDate (){
               alert ('ejecture a event')
           
            }
           
           
  
  
}
 emit (EventName )
{
   
    EventName.addEventListener('mouseover', ChangeColorOver );
    EventName.addEventListener('mouseout', ChangeColorOut );

       }      

    
//Permite cambiar el color y la letra del button 

 off (EventName)
{
    EventName.removeEventListener('mouseover', ChangeColorOver )
    EventName.removeEventListener('mouseout', ChangeColorOut );

    // Elimina lo hecho en el procedimiento emit
   
    

}
}
function ChangeColorOver ()
{
    this.style.background = 'red';
    this.style.color = 'yellow';
}

function ChangeColorOut ()
{
    this.style.background = 'black';
    this.style.color = 'yellow';
}

function removeEvent (consumir){
    consumir.removeEventListener('mouseover', ChangeColorOnMouseOver() );
}
    
/*var Movie1 =new movie ('DragonBall','2018','120minutes');
var Movie2 =new movie ('Deadpool','2018','120minutes');
var Movie3 =new movie ('Avenger3','2018','180minutes');
Movie1.play();
Movie1.pause();
Movie2.play();
Movie2.datos();
Movie2.pause();
Movie3.play();
Movie3.pause();
Movie3.resumen();
Movie3.datos(); exto de prueba */ 

       
function submit (){
     
    var TPELICULA = document.getElementById ('TPELICULA').value;
    var NPELICULA = document.getElementById ('NPELICULA').value;
    var DPELICUL = document.getElementById ('DPELICUL').value;
    var NV1 = document.getElementById ('NV1').value;
    var ANV1 = document.getElementById ('ANV1').value;
    var NV2 = document.getElementById ('NV2').value;
    var ANV2 = document.getElementById ('ANV2').value;
    var NV3 = document.getElementById ('NV3').value;
    var ANV3 = document.getElementById ('ANV3').value;
    var NV4 = document.getElementById ('NV4').value;
    var ANV4 = document.getElementById ('ANV4').value; 
    var NEWMOVIE = new movie(TPELICULA, NPELICULA, DPELICUL);
var villan = new actor(NV1, ANV1);
console.log (villan.nameactor,villan.ageactor);
const actors = [
    new actor (NV2,ANV2),
    new actor (NV3, ANV3),
    new actor (NV4, ANV4)];

    NEWMOVIE.addCast(villan);
    NEWMOVIE.addCast(actors);
    
      }   
      function PLAYMOVIE (){
          var name = document.getElementById('namepelicula').value;
    
      var playingmovie = new movie (name);
      playingmovie.play(playingmovie.title);
      Movietoshare = playingmovie;
                
          }             
                    
          const tmpsocial = {
            share(friendName, Movietoshare)
            {
                var Movietoshare = new movie;
         var Venom = new movie ('VENOM',2018, 120);
        Object.assign (Movietoshare, Venom);
                console.log (friendName + " Te compartio la pelicula "+ Movietoshare.title)
            },
            like(friendName,Movietoshare )
            {
                var Movietoshare = new movie;
         var Venom = new movie ('VENOM',2018, 120);
        Object.assign (Movietoshare, Venom);
                console.log ("A " +friendName + " Le gusta la pelicula  "+Movietoshare.title)
        
            }    
        }
        
        const Social = Object.create (tmpsocial);
       
            

function Share (){
    
    var name = document.getElementById('NUSUARIO').value;
    Social.share (name, );          
    }   

function Like (Movietoshare){
        var name = document.getElementById('NUSUARIO').value;
        Social.like(name, );        
        }   

