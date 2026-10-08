import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class DatosService {
    nombre = signal('');
    contador = signal(0);
    enviado = signal(false);
    ciudad= signal('');
    edad=signal(0);
        guardar(nombre: string, ciudad: string, contador: number, edad: number): void{
            this.nombre.set(nombre);
            this.contador.set(contador);
            this.ciudad.set(ciudad);
            this.edad.set(edad);
            this.enviado.set(true);
        }
}
