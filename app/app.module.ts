import { NgModule, ErrorHandler } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { IncendioComponent } from '../pages/incendio/incendio.component';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuComponent } from './menu/menu.component';
import { AguaComponent } from '../pages/agua/agua.component';
import{FenomenosComponent} from '../pages/fenomenos/fenomenos.component';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuComponent,
    IncendioComponent,
    AguaComponent,
    FenomenosComponent
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Calendar
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IncendioComponent,
    AguaComponent,
    FenomenosComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
