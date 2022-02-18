import { Routes } from "@angular/router";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { NossosPetsComponent } from "./institucional/nossos-pets/nossos-pets.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";

export const rootRouterConfig: Routes  =[
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'nossos-pets', component: NossosPetsComponent}
];