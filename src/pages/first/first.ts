import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { FirstProvider } from './providers/first-service';
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
  name;
  apiObservable;
  searchSubject = new Subject();

  constructor(
    public navCtrl: NavController,
    private http: Http,
    private firstProvider: FirstProvider
  ) {}
  
  findCharacter(name) {
    this.searchSubject.next(name); 
  }
  
  
  ngOnInit() {
    this.apiObservable = this.searchSubject
    .debounceTime(250)
    .distinctUntilChanged()
    .switchMap(name => this.firstProvider.createAPIObservable(name));

  }
}
