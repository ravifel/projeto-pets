import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { NossosPetsComponent } from './institucional/nossos-pets/nossos-pets.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [ //COMPONENTES
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    NossosPetsComponent
  ],
  imports: [ //MODULOS
    BrowserModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})]
  ],
  providers: [ //SERVIÇOS
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
