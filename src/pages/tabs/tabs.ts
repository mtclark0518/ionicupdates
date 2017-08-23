import { Component } from '@angular/core';

import { PokemonPage } from '../pokemon/pokemon';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { TylerPage } from '../first/first'
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PokemonPage;
  tab4Root = ContactPage;
  tab3Root = TylerPage;

  constructor() {

  }
}
