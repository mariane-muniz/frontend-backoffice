import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListData } from '../dtos/ListData';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private server: string = "http://app-backend-content.herokuapp.com";
  // private server: string = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  getTableDescription(className: string): Observable<ListData> {
    // let url = this.server + '/tables/search/findOneByClassName?className=' + className;
    // let url = this.server + '/links';
    let url = this.server + "/list/" + className;
    return this.http.get<ListData>(url);
  }
}
