import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { IncendioComponent } from '../incendio/incendio.component';
import { AguaComponent } from '../agua/agua.component';
import { FenomenosComponent } from '../fenomenos/fenomenos.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = IncendioComponent;
   tab5Root = AguaComponent;
   tab6Root = FenomenosComponent;
  constructor() {

  }
}
