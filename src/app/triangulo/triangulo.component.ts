import { Component } from '@angular/core';
import { IonList, IonItem, IonInput, IonLabel, IonButton, IonCardContent, 
  IonCard, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { Triangulo } from '../triangulo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [IonList, IonItem, IonLabel, IonInput, IonButton, IonCard, 
    IonCardContent, IonCardHeader, IonCardTitle, CommonModule, FormsModule],
  standalone: true,
})
export class TrianguloComponent {

  triangulo = new Triangulo(0, 0, 0);
  resultado: number = 0;

  constructor() { }

  calcular() {
    this.resultado = this.triangulo.calcularPerimetro();
  }
}
