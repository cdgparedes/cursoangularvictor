import{Pipe,PipeTransform} from "@angular/core";//importamos los paquetes de los pipes

@Pipe({name:'conversor'})
export class ConversorPipe implements PipeTransform{
	transform(value, por){//multiplicamos estos numeros entre si
		let value_one = parseInt(value);
		let value_two = parseInt(por);

		let result ="La multiplicaciòn: "+value_one+"x"+value_two+" = "+(value_one*value_two);
		return result;
		
	}
}