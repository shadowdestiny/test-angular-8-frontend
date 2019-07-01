import {Injectable} from '@angular/core';
import {Times} from '../models/times.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API} from '../../../config/api';

@Injectable({
  providedIn: 'root',
})
export class TimeService {

  constructor(
    public http: HttpClient) {
  }

  getTime(): Observable<Times> {
    const serviceURL = `${API.DATA_SERVICES_BASE_URL}/time`;
    return this.http.get<Times>(serviceURL);
  }
}
