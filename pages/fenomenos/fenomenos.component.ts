import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { Calendar } from '@ionic-native/calendar/ngx';


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


  private garantiaLluvia:any[] = [
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


 


constructor(public navCtrl: NavController, calendar: Calendar) {

  }

 onSubmitTemplate(){
   console.log('Form submit');

   this.navCtrl.push(ContactPage,this.usuario);
 }

  

}