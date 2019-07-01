import {Injectable} from '@angular/core';
import {Booking} from '../models/booking.model';
import {SessionStorageService} from 'ngx-webstorage';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API} from '../../../config/api';

@Injectable({
  providedIn: 'root',
})
export class BookingService {

  constructor(
    public http: HttpClient, public sessionStorage: SessionStorageService) {
  }

  getToken() {
    const user = this.sessionStorage.retrieve('user');
    if (!!user && !!user.token) {
      return user.token;
    }
    return false;
  }

  getBookings(init, end, id, firstName): Observable<Array<Booking>> {
    const serviceURL = `${API.DATA_SERVICES_BASE_URL}/bookings`;
    return this.http.post<Array<Booking>>(serviceURL, {
      init,
      end,
      id,
      firstName
    });
  }

  getBooking(slug: string): Observable<Booking> {
    const serviceURL = `${API.DATA_SERVICES_BASE_URL}/bookings/${slug}`;
    return this.http.get<Booking>(serviceURL);
  }

  getBookingsByUsingToken(): Observable<Array<Booking>> {
    const serviceURL = `${API.DATA_SERVICES_BASE_URL}/bookings/user`;
    // const token = this.getToken();
    //
    // if (token) {
    //   const headers = this.createHeadersObject(token);
    return this.http.get<Array<Booking>>(serviceURL);
    // }

    // return null;
  }
}
