import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  id: string;
  name: string;
  garantia: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = navParams.get('nombre');
    this.name = navParams.get('password');
    this.garantia = navParams.get('garantia')
     console.log (this.id, this.name, this.garantia);

  }

}
