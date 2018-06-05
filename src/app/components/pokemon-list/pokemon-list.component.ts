import { environment } from './../../../environments/environment';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

// RxJs
import { map } from 'rxjs/operators';

import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../model/pokemon';


@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

    allPokemons: Pokemon[] = [];
    filtered: Pokemon[] = [];
    currentPagePokemons: Pokemon[] = [];

    curPage: 1;
    noOfRecordsPerPage: number = environment.pokemonsPerPage;

    showSpinner = false;

    constructor(private pokemonService: PokemonService) { }

    ngOnInit() {
        this.showSpinner = true;
        this.pokemonService.listPokemons(environment.pokemonSearchLimit)
            .pipe(
                map(response => {
                    response.results.forEach((element, index) => {
                        element.num = index + 1;
                    });
                    return response.results;
                })
            )
            .subscribe(response => {
                this.allPokemons = response;
                this.filtered = this.allPokemons.slice();
                this.showSpinner = false;
                this.createPage(1);
            });
    }

    changePage(pageNumber) {
        if (pageNumber) {
            this.createPage(pageNumber);
        }
    }

    searchPokemon(searchString: string) {
        if (searchString) {
            this.filtered = this.allPokemons
                .filter(item => {
                    return (item.name.toLowerCase().includes(searchString.toLowerCase()));
                });
        } else {
            this.filtered = this.allPokemons.slice();
        }
        this.createPage(1);
    }

    createPage(pageNumber: number): any {
        if (this.filtered) {
            console.log(pageNumber);
            const start = (pageNumber - 1) * this.noOfRecordsPerPage;
            const end = start + this.noOfRecordsPerPage;

            console.log(start);
            console.log(end);

            this.currentPagePokemons = this.filtered.slice(start, end);
        } else {
            this.currentPagePokemons = [];
        }
    }
}
