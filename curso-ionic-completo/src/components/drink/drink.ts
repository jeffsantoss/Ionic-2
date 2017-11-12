import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'drink',
  templateUrl: 'drink.html'
})
export class DrinkComponent {
  @Input() public name:string;
  @Input() public photoUrl :string;
  @Input() public beerType: string;
  @Input() public description: string = "A cerveja é uma bebida produzida a partir da fermentação de cereais, principalmente a cevada maltada. Acredita-se que tenha sido uma das primeiras bebidas alcoólicas que foram criadas pelo ser humano."
  @Input() public size?:number;
  @Output() public interest = new EventEmitter();

  constructor() {
    console.log('Hello DrinkComponent Component');
    this.interest.emit(this.size)
  }

  // Componentes são usados para serem compatíveis com angular e Ionic, ou pelo menos deveriam,
  // Dessa forma vamos usar os hooks do próprio angular
  ngAfterViewInit(){
      this.interest.emit(this.beerType)
  }
  teste(){
    console.log("teste")
  }
}
