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

    results: Pokemon[] = [];
    chunks: any;

    constructor(private pokemonService: PokemonService) { }

    ngOnInit() {
        this.pokemonService.listPokemons(151)
            .subscribe(response => {
                this.results = response.results;
                this.chunks = this.createChunks(this.results, 4);
            });
    }

    createChunks(array: Pokemon[], numberInEachChunk: number) {
        let results = [];
        results = [];
        while (array.length) {
            results.push(array.splice(0, numberInEachChunk));
        }
        return results;
    }

}
