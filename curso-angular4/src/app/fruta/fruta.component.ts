import{ Component } from '@angular/core';

@Component({
    selector:'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

    public nombre:string;
    public edad:number ;
    public mayorDeEdad:boolean ;
    public trabajos:Array<string> =['Carpintero','Albañil','fontanero'];
    comodin:any; 

    constructor(){
        this.nombre = 'Cesar Dubiel';
        this.edad = 17;
        this.mayorDeEdad = false;
        this.comodin = "SI";

       
    }
    ngOnInit(){/*se usa para cargar funcionalidas y no cargarlas en  contructor */
        this.cambiarNombre();
        this.cambiarEdad(45);
        alert(this.nombre);
    }
    cambiarNombre(){
        this.nombre ='Damaris Paredes';
    }
    cambiarEdad(edad){
        this.edad =edad;
    }
}