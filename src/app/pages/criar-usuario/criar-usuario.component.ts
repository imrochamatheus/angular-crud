import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Perfil,
  UserInterfaces,
} from 'src/app/shared/services/user/usuario.interfaces';
import { UsuarioService } from 'src/app/shared/services/user/usuario.service';
import {
  pegarErroCampo,
  PegarErroCampoFn,
} from 'src/app/utils/pegarErroCampoFormulario';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.less'],
})
export class CriarUsuarioComponent {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly usuarioService: UsuarioService = inject(UsuarioService);

  public readonly pegarErroCampo: PegarErroCampoFn = pegarErroCampo;
  public readonly form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      password: ['', Validators.required],
      perfil: [Perfil.USUARIO],
    });
  }

  private criarUsuario(): void {
    const body: UserInterfaces.Send.Create = this.form.value;

    this.usuarioService.criar(body).subscribe((resposta) => {
      console.log(resposta);
    });
  }

  public enviar(): void {
    if (!this.form.valid) {
      return;
    }

    this.criarUsuario();
  }
}
