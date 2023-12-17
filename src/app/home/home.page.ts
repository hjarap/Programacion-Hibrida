import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelectOption, IonSelect, IonItem, IonLabel, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, CirculoComponent, TrianguloComponent,
        FormsModule, IonSelect, IonSelectOption, CommonModule, IonItem, IonLabel, CommonModule,]
})
  export class HomePage {
    figuraSeleccionada: string = "";
    constructor() {}

    }

  
