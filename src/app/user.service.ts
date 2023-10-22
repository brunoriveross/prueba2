import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  emailValue: string | undefined;
  passValue: string | undefined;

  constructor() {}
}
