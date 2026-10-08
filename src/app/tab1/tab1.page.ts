import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { DatosService } from '../services/datos';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, IonInput, IonItem, FormsModule ],
})
export class Tab1Page {
  
  nombre='';
  contador=0;
  mensaje='';
  ciudad='';
  edad=0;

  private datos = inject(DatosService);
  private router = inject(Router);

  aumentar(): void {
    this.contador = this.contador + 2;
  }
  disminuir(): void {
    this.contador = this.contador - 2;
  }
  reiniciar(): void {
    this.contador = 0;
  }
  aumentar2(): void {
    this.edad ++;
  }
  disminuir2(): void {
    this.edad --;
  }
  reiniciar2(): void {
    this.edad = 0;
  }
  enviar(): void {
    const nombreLimpio = this.nombre.trim();
    const ciudadLimpia = this.nombre.trim();

    if (!nombreLimpio) {
      this.mensaje = 'Ingresa tu nombre antes de continuar.';
      return;
    }
    if (!ciudadLimpia) {
      this.mensaje = 'Ingresa la ciudad antes de continuar.';
      return;
    }
    this.mensaje='';
    this.datos.guardar(nombreLimpio, ciudadLimpia, this.contador,this.edad );
    this.router.navigateByUrl('/tabs/tab2');
  }

}
