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
import { ListaDogsComponent } from './institucional/nossos-pets/dogs/lista-dogs/lista-dogs.component';
import { DogsService } from './institucional/nossos-pets/dogs/dogs.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [ //COMPONENTES
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    NossosPetsComponent,
    ListaDogsComponent
  ],
  imports: [ //MODULOS
    BrowserModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})]
  ],
  providers: [ //SERVIÇOS
    DogsService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
