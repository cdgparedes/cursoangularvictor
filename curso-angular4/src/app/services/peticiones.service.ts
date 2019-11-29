import {Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';/*importamos los modulos de http*/
//import {map} from 'rxjs/operators';
import 'rxjs/add/operator/map';/* Libreria que se usa para mapear la respuesta */
import {Observable} from 'rxjs/Observable';/*permite manipular rxjs*/

@Injectable()
export class PeticionesService{
	public url: string;


	constructor(private _http:Http){/*Para usar el servicio http y petiociones Ajax debemos definir unapropiesa Http*/
		this.url ="https://jsonplaceholder.typicode.com/posts";
	}

	getPrueba(){
		return 'Hola mundo desde el servicio.';
	}

	getArticulos(){/*Este mètodo va hacer una peticion por GET*/
			return this._http.get(this.url)
							 .map(res => res.json())//captura la repuesta en un callbak y la convierte ajson
							//.pipe(map(res => res.json()));
	}
}
