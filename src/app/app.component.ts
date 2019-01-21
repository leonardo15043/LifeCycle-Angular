import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  cycles:any[] = [];

  ngOnDestroy() {
    console.log("ngOnDestroy");
    this.cycles.push({
      title: 'ngOnDestroy',
      description: 'Justo antes que se destruya el componente o directiva',
    });
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
    this.cycles.push({
      title: 'ngAfterViewChecked',
      description: 'Despues de cada revision de los componentes/hijos',
    });
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
    this.cycles.push({
      title: 'ngAfterViewInit',
      description: 'Despues de la inicializacion del componente/hijos',
    });
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
    this.cycles.push({
      title: 'ngAfterContentChecked',
      description: 'Despues de insertar contenido ( <app-alguna-pagina> )',
    });
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
    this.cycles.push({
      title: 'ngAfterContentInit',
      description: 'Despues de insertar contenido ( <app-alguna-pagina> )',
    });
  }
  ngDoCheck() {
    console.log("ngDoCheck");
    this.cycles.push({
      title: 'ngOnChanges',
      description: 'Durante cada revision del ciclo de deteccion de cambios',
    });
  }
  ngOnChanges(){
    console.log("ngOnChanges");
    this.cycles.push({
      title: 'ngOnChanges',
      description: 'Cuando la data de propiedades relacionadas cambian',
    });
  }
  ngOnInit() {
    console.log("ngOnInit");
    this.cycles.push({
      title: 'ngOnInit',
      description: 'El componente esta iniciando',
    });
  }

}
