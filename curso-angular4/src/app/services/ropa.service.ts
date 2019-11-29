import {Injectable} from '@angular/core';

@Injectable()//Estamos importando este decorador la clase injectable
export class RopaService{
	public nombre_prenda='Pantalones Vaqueros';
	public coleccion_ropa=['Pantalones Blancos','Camiseta roja'];

	prueba(nombre_prenda){
		return nombre_prenda
	}

	addRopa(nombre_prenda:string):Array<string>{//estoy indicando que va a devolver un array de strings
		this.coleccion_ropa.push(nombre_prenda);//con el push le añado al array el nombre de la prenda 
		return this.getRopa()
	}

	deleteRopa(index:number){
		this.coleccion_ropa.splice(index, 1);//El 1 es el numero de elementos que vamos a eliminar del array
		return this.getRopa();
	}

	getRopa():Array<string>{
		return this.coleccion_ropa;
	}
}