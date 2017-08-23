import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FirstProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirstProvider {

  constructor(private http: Http) {
  }
  createAPIObservable(name){
        return this.http.get('http://swapi.co/api/people/?search=' + name)
            .map(response=> response.json().results );
    }

}
