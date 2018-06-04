import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../model/pokemon';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

    @Input() pokemon: Pokemon;
    @Input() pokeNumber: number;

    constructor() { }

    ngOnInit() {
        if (null == this.pokemon) {
            throw new Error('Attribute pokemon is required');
        }
        if (null == this.pokeNumber) {
            throw new Error('Attribute pokenumber is required');
        }
    }

}
