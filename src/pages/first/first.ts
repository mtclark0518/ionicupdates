import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
/**
 * Generated class for the FirstPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class TylerPage implements OnInit {
  results;
  searchSubject = new Subject();

  constructor(
    public navCtrl: NavController,
  ) {}
  
  findCharacter(name) { this.searchSubject.next(name); }
  ngOnInit() {
  }
}
