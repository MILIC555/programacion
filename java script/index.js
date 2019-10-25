
            var mensaje;
            var dias= ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
            var edad = prompt("ingresa tu edad");

            if (edad >= 12) {
                mensaje = "bienvenido a mi sitio";    
            }else if (edad > 10 && edad <12) {    
                mensaje = "bueno quedate si queres"; 
            }else{
                mensaje = "CHAU!";
            }
            alert(mensaje);

            
            for (var i= i=0; i<7 ; i++){
            alert(dias[i]);
            }
    
            
