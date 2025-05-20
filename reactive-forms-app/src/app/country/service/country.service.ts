import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountryService {
  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'https://restcountries.com/v3.1'
  // private baseUrl = 'https://restcountries.com/v3.1/all?fields=name,flags'
  http = inject(HttpClient);


  private _regions = [ 'Africa'  , 'Americas'  , 'Asia'  , 'Europe'  , 'Oceania' ];

  get regions(): string[] {
    return [...this._regions]
  }

  getCountriesByRegion(region:string) : Observable<Country[]> {
    if(!region) return of([])

    const url = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`
    return this.http.get<Country[]>(url);


  }


  getCountryByAlphaCode(code: string) : Observable<Country>{
    // code = code.toLowerCase();

    const url = `${this.baseUrl}/alpha/${code}?fields=cca3,name,borders`

    return this.http.get<Country>(url);

  }

  getCountryNamesByCodeArray(countryCodes: string[]) {

    if(!countryCodes || countryCodes.length == 0 ) return of([])


    const countriesRequests: Observable<Country>[] = [];

    countryCodes.forEach(code => {
      const request = this.getCountryByAlphaCode(code);
      countriesRequests.push(request);

    })

    return combineLatest(countriesRequests)


  }
}
