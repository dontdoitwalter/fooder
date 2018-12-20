import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchYelpService {
  private _APIKEY = 'Bearer 8hVbHGcLjFukZty8ak0B6diNX_HycyddtPj6HFFoy9KrUKUmVGPZF2MjeXv07etkXCmrxQSKO47pLM_CifkbstYsOgvrEHjMaFwZOak9xwm2j5L_PZQaYwCXV58aXHYx'

  constructor(private _http: HttpClient) { }

  
}
