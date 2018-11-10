
function alertfuncion() {
    alert("Alert Funcion");
}
function repositori(){
    if (window.XMLHttpRequest) {
        { var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    var API = JSON.parse (this.responseText);
                    document.getElementById("content").innerHTML += 'Function Chuck Norris id: '+API.value.id;
                    document.getElementById("content").innerHTML += '<p> Joke: '+API.value.joke;
                                   }
            }
            xhr.open('GET',url1, true);
            xhr.send(null)
            
            }
     } else {
        // code for old IE browsers
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        document.getElementById("content").innerHTML="<span style='color:#FF0000'> hi </span>";
            document.getElementById("content").innerHTML += 'ERROR';
    } }

  
      var url = 'https://api.github.com/search/repositories?q=javascript';
      var url1 = 'http://api.icndb.com/jokes/random.';
      


      function createCORSRequest(){
        if (window.XMLHttpRequest) {
            { var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                        var api = JSON.parse (this.responseText);
                        var count = api.items;

                        /*alert (API.items[0]['description']);*/
                    document.getElementById("content").innerHTML += 'Total Count '+api.total_count+ "<p>";
                    for(var i = 0; i < count.length ; i++){ //hardcodeo el codigo para ahorrar tiempo
                       document.getElementById("content").innerHTML +="<li>"+[i+1]+"<p> Descripción de items:" +api.items[i]['description'] ;
                       console.log ('hola');
                       
                                                                    
                       }

                        
                    };
                }
                xhr.open('GET',url, true);
                xhr.send(null)
                }
         } else {
            // code for old IE browsers
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            document.getElementById("content").innerHTML="<span style='color:#FF0000'> hi </span>";
            document.getElementById("content").innerHTML += 'ERROR';
        } }

        function SearchValue(TextSearch){
            var ValuetoSearch = document.getElementById("TextSearch").value;
            console.log(ValuetoSearch);
            var ValuetoSearch= "https://api.github.com/search/repositories?q="+ValuetoSearch;
            console.log (ValuetoSearch);
            if (window.XMLHttpRequest) {
                { var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState == XMLHttpRequest.DONE) {
                            var API = JSON.parse (this.responseText);
                            var count = API.items;
                            /*alert (API.items[0]['description']);*/
                        document.getElementById("content").innerHTML += 'Total Count '+API.total_count+ "<p>";
                        for(var i = 0; i < count.length ; i++){ //hardcodeo el codigo para ahorrar tiempo
                           document.getElementById("content").innerHTML +="<li>"+[i+1]+"<p> Descripción de items:" +API.items[i]['description'] ;
                          
                                                                        
                           }
    
                            
                        };
                    }
                    xhr.open('GET',ValuetoSearch, true);
                    xhr.send(null)
                    }
             } else {
                // code for old IE browsers
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                document.getElementById("content").innerHTML="<span style='color:#FF0000'> hi </span>";
                document.getElementById("content").innerHTML += 'ERROR';
            }}
         
    /*Se puede reutilizar esta ultima función para todas las demás , pero las deje a modo de pogreso*/
    function CreateTableDinamyc () {
        var body = document.getElementsByTagName("body")[0];
        var tabla   = document.createElement("table");
        var tblBody = document.createElement("tbody");
       
              
        for (var i = 0; i < count.length ; i++)
        {
            var hilera = document.createElement("tr")
        }
        
        
        for (var j = 0; j < count.length ; j++)
        {
            var hilera = document.createElement("tr")
        }
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(APi.items+j+APi.description+j);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        
        }

        function genera_tabla() {
            var body = document.getElementsByTagName("body")[0];
            var tabla   = document.createElement("table");
            var tblBody = document.createElement("tbody");
                          
          var ValuetoSearch= "https://api.github.com/search/repositories?q=javascript";
                
                if (window.XMLHttpRequest) {
                    { var xhr = new XMLHttpRequest();
                        xhr.onreadystatechange = function() {
                            if (xhr.readyState == XMLHttpRequest.DONE) {
                                var API = JSON.parse (this.responseText);
                                var count = API.items;
                                for (var i = 0; i < count.length; i++) {
                                    // Crea las hileras de la tabla
                                     var hilera = document.createElement("tr");
                                     
                                 
                                    for (var j = 0; j < 6; j++) {
                                      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                                      // texto sea el contenido de <td>, ubica el elemento <td> al final
                                      // de la hilera de la tabla
                                      var celda = document.createElement("td");
                                     
                                      switch (j)
                                      
                                      {
                                          case 0:
                                          var textoCelda = document.createTextNode(i);
                                          break;
                                          case 1:
                                          var textoCelda = document.createTextNode("Número de Item:"+para+API.items[i]['id']);
                                          break;
                                          case 2: 
                                          var textoCelda = document.createTextNode("Número de nodo:  "+API.items[i]['node_id']);
                                          break;
                                          case 3:
                                          var textoCelda = document.createTextNode("Nombre Completo: "+API.items[i]['full_name']);
                                          break;
                                          case 4:
                                          var textoCelda = document.createTextNode("Descripción :"+API.items[i]['description']);
                                          break;
                                          case 5:
                                          var textoCelda = document.createTextNode("Url :"+API.items[i]['url']);
                                          break;
                                          
                                           }
                                           celda.appendChild(textoCelda);
                                           hilera.appendChild(celda);                                      
                                       
                                      
                                    }
                                 
                                    // agrega la hilera al final de la tabla (al final del elemento tblbody)
                                    tblBody.appendChild(hilera);
                                  }
                                 
                                  // posiciona el <tbody> debajo del elemento <table>
                                  tabla.appendChild(tblBody);
                                  // appends <table> into <body>
                                  body.appendChild(tabla);
                                  // modifica el atributo "border" de la tabla y lo fija a "2";
                                  tabla.setAttribute("border", "2");
                      
                                                  
        
                                
                            }
                        }
                        xhr.open('GET',ValuetoSearch, true);
                        xhr.send(null)
                        }
                 } else {
                    // code for old IE browsers
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                    document.getElementById("content").innerHTML="<span style='color:#FF0000'> hi </span>";
                    document.getElementById("content").innerHTML += 'ERROR';
                }
               
            // Crea las celdas
           
        }
        
