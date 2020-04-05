import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'app-agua',
  templateUrl: './agua.component.html',
  styleUrls: ['./agua.component.css']
})
export class AguaComponent  {
   
input: string;
usuario = {
garantia:"",
tipoDeConduccion:"",
areaDondeSeProduce:"",
area:""

}


  private garantiaAgua:any[] = [
{
  garantia:"Rotura de conducción"
},
{
  garantia:"Desbordamiento por atasco"
}
];

private area:any[] = [
{
  areaDondeSeProduce:"Comunitaria"
},
{
  areaDondeSeProduce:"Privativa"
}

];

private tipo:any[] = [
{
  tipoDeConduccion:"Bajante"
},
{
  tipoDeConduccion:"General"
}
];

private asistencia:any[] = [
{
  asisten:"Solicitan asistencia"
},
{
  asisten:"Reparan particularmente"
}

];


constructor(public navCtrl: NavController) {

  }

 onSubmitTemplate(){
   console.log('Form submit');

   this.navCtrl.push(ContactPage,this.usuario);
 }

  

}