class movie {
    constructor(title , year, duration){
    this.title =title;
    this.year =year;
    this.duration =duration;
    }
    datos () {
        console.log(this.title,this.year,this.duration)
    }
    play () {
        console.log (this.title,'PLAY MOVIE')
    }
    pause (){
        console.log(this.title,'PAUSE MOVIE')
    }
    resumen (){
        console.log(this.title,'RESUME MOVIE')
    }
}

var Movie1 =new movie ('DragonBall','2018','120minutes');
var Movie2 =new movie ('Deadpool','2018','120minutes');
var Movie3 =new movie ('Avenger3','2018','180minutes');

function Start () {
    
}
    
    


Movie1.play();
Movie1.pause();
Movie2.play();
Movie2.datos();
Movie2.pause();
Movie3.play();
Movie3.pause();
Movie3.resumen();
Movie3.datos();

class actor {
   constructor(name , age){
    this.name= name;
    this.age =age;}
}
class EventEmitter {
    constructor() {        

    }
    on(Eventname, callback){
    callback(Eventname); 
        
    }
}


    
    

    

 

