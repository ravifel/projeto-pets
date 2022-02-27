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
import { ListaCatsComponent } from './institucional/nossos-pets/cats/lista-cats/lista-cats.component';
import { CatsService } from './institucional/nossos-pets/cats/cats.service';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { LiveFormDialogComponent } from './institucional/nossos-pets/live-form-dialog/live-form-dialog.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [ //COMPONENTES
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    NossosPetsComponent,
    ListaDogsComponent,
    ListaCatsComponent,
    LiveFormDialogComponent
  ],
  imports: [ //MODULOS
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})]
  ],
  providers: [ //SERVIÇOS
    DogsService,
    CatsService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
