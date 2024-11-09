import { FormGroup } from '@angular/forms';

export type PegarErroCampoFn = (nomeCampo: string, form: FormGroup) => string;

export function pegarErroCampo(nomeCampo: string, form: FormGroup): string {
  if (form.get(nomeCampo)?.hasError('required')) {
    return `O campo ${nomeCampo} é obrigatório`;
  }

  return '';
}
