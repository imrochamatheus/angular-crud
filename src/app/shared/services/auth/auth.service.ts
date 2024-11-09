import {
  effect,
  inject,
  signal,
  Injectable,
  WritableSignal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environments } from 'src/environments';
import { AuthInterfaces } from './auth.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http: HttpClient = inject(HttpClient);

  public readonly userToken: WritableSignal<string | null> = signal(null);

  constructor() {
    effect(() => {
      console.log(`UserToken mudou.. Novo valor ${this.userToken()}`);
    });
  }

  public login(
    payload: AuthInterfaces.Send.Login
  ): Observable<AuthInterfaces.Receive.Login> {
    return this.http.post<AuthInterfaces.Receive.Login>(
      `${environments.baseUrl}/Usuarios/authenticate`,
      payload
    );
  }
}
