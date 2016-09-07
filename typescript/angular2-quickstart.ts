import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'angular2-quickstart',
  template: '<h1> {{saludo}} </h1>'
})

class Angular2QuickstartComponent {
  saludo: string;
  constructor() {
    this.saludo = '¡Hola Angular 2!';
  }
}

bootstrap(Angular2QuickstartComponent); // Componente es bootstrapped!
