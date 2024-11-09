import { inject, Injectable } from '@angular/core';
import { UserInterfaces } from './usuario.interfaces';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environments } from 'src/environments';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly authService: AuthService = inject(AuthService);

  public criar(
    body: UserInterfaces.Send.Create
  ): Observable<UserInterfaces.Receive.Create> {
    return this.http.post<UserInterfaces.Receive.Create>(
      `${environments.baseUrl}/Usuarios`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.authService.userToken()}`,
        },
      }
    );
  }
}
