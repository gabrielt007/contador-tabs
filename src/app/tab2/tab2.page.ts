import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardHeader, IonCardContent } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { DatosService } from '../services/datos';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardTitle, IonCardHeader, IonCardContent]
})
export class Tab2Page {

  datos=inject(DatosService);

}

