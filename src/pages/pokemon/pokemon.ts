import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PokemonProvider } from './providers/pokemon-service';
import { Pokemon } from './pokemonClass';

@Component({
  selector: 'page-pokemon',
  templateUrl: 'pokemon.html'
})
export class PokemonPage {

  pokemon: Pokemon[]=[];
  addPoke(pokemon){
    console.log(this.pokemon);
  }


  constructor(public navCtrl: NavController,
  private pokemonProvider: PokemonProvider) {

  }
ngOnInit(){
  this.addPoke(this.pokemon);
}




}
