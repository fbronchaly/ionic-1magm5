import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'app-incendio',
  templateUrl: './incendio.component.html',
  styleUrls: ['./incendio.component.css']
})
export class IncendioComponent  {

   
input: string;
usuario = {
garantia:""
}


  private garantiaIncendio:any[] = [
{
  garantia:"Incendio"
},
{
  garantia:"Explosión"
},
{
  garantia:"Conato de incendio"
},
{
  garantia:"Caída de rayo"
}
];

private intervieneBomberos:any[] = [
{
  intervencion:"Si"
},
{
  intervencion:"No"
}

];




constructor(public navCtrl: NavController) {

  }

 onSubmitTemplate(){
   console.log('Form submit');

   this.navCtrl.push(ContactPage,this.usuario);
 }

}