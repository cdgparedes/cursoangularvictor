import {Component} from '@angular/core';
import {Empleado} from './empleado';
@Component({
	selector:'empleado-tag',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent{
	public titulo ='Componente Empleados';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color :string;
    public color_seleccionado:string;

    constructor(){
	    this.empleado = new Empleado('Cesar Dubiel Grajales',45,'cocinero',true);
	    this.trabajadores = [
		    new Empleado('Daniel Grajales',35,'administrativo',true),
		    new Empleado('Ana lopez',25,'Cocinera',false),
		    new Empleado('Victor Robles',66,'programador ',false)
		];

		this.trabajador_externo = false;
		this.color ='blue';
		this.color_seleccionado='#ccc'
	}	
    ngOnInit(){
    	console.log(this.empleado);
    	console.log(this.trabajadores);
    }
    cambiarExterno(valor){
    	this.trabajador_externo = valor ;

    }
    logColorSeleccionado(){
    	console.log(this.color_seleccionado);
    }
}

