import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';


@Component({
  selector: 'app-fenomenos',
  templateUrl: './fenomenos.component.html',
  styleUrls: ['./fenomenos.component.css']
})
export class FenomenosComponent  {

 input: string;
usuario = {
agua:"",
area:"",
conduccion:""

}


  private garantiaAgua:any[] = [
{
  garantia:"LLuvia"
},
{
  garantia:"Viento"
},
{
  garantia:"Granizo"
},
{
  garantia:"Nieve"
},
];


 


constructor(public navCtrl: NavController) {

  }

 onSubmitTemplate(){
   console.log('Form submit');

   this.navCtrl.push(ContactPage,this.usuario);
 }

  

}