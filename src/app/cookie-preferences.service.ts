import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiePreferencesService {

  constructor() { }

  setPreferences(preferences: any) {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
  }
}