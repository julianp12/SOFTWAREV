import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] =[
    {
      icon: 'airplane-sharp',
      name: 'Action Sheet',
      redirecTo:'/action-sheet'
    },
    {
      icon: 'alarm-sharp',
      name: 'Alert',
      redirecTo:'/alert'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
