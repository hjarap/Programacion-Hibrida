import { Figura } from './Figuras/figura-geometrica';

export class Circulo extends Figura {

  radio: number;

  constructor(radio: number) {
    super();
    this.radio = radio;
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio; 
  }

}