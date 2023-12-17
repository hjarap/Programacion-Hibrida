import { Component } from '@angular/core';
import { IonCardHeader, IonItem, IonCard, IonCardTitle,IonLabel, IonInput, IonButton, IonCardContent } from '@ionic/angular/standalone';
import { Circulo } from '../circulo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [ IonButton, IonCardHeader, IonInput, IonItem, IonLabel, IonCardTitle, IonCardContent, 
    CommonModule, FormsModule, IonCard],
  standalone: true,
})
export class CirculoComponent {
  circulo = new Circulo(0);
  resultado: number = 0;
  
  

  constructor() { }

  calcular() {
    this.resultado = this.circulo.calcularPerimetro();
  }
}