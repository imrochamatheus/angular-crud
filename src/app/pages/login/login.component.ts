import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, EMPTY } from 'rxjs';

import { AuthInterfaces } from 'src/app/shared/services/auth/auth.interfaces';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import {
  pegarErroCampo,
  PegarErroCampoFn,
} from 'src/app/utils/pegarErroCampoFormulario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly authService: AuthService = inject(AuthService);

  public pegarErroCampo: PegarErroCampoFn = pegarErroCampo;

  public form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      id: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private logar(): void {
    const body: AuthInterfaces.Send.Login = this.form.value;

    this.authService
      .login(body)
      .pipe(
        catchError((error) => {
          console.error('Ocorreu um erro ao logar');
          return EMPTY;
        })
      )
      .subscribe((resposta) => {
        if (resposta.jwtToken) {
          this.authService.userToken.set(resposta.jwtToken);
        }
      });
  }

  public enviar(): void {
    if (!this.form.valid) {
      return;
    }

    this.logar();
  }
}
