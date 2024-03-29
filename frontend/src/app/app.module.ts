import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { UtilitariosComponent } from './components/utilitarios/utilitarios.component';
import { NossaEmpresaComponent } from './components/nossa-empresa/nossa-empresa.component';
import { ContatoComponent } from './components/contato/contato.component';
import { CardsComponent } from './components/cards/cards.component';
import { FaleConoscoComponent } from './components/fale-conosco/fale-conosco.component';
import { RodapeComponent } from './components/rodape/rodape.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    UtilitariosComponent,
    NossaEmpresaComponent,
    ContatoComponent,
    CardsComponent,
    FaleConoscoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
