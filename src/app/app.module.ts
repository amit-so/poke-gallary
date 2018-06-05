import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

@NgModule({
    declarations: [
        AppComponent,
        PokemonListComponent,
        PokemonComponent,
        SpinnerComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
