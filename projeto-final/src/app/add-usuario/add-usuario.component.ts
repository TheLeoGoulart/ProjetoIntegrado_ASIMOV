import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {
  public usuarioForm: FormGroup;
  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
  ) {}
  ngOnInit() {
    this.crudApi.GetUsuarioList();
    this.userForm();
  }
  userForm() {
    this.usuarioForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      sobrenome: [''],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
      senha: [''],
      cpf: [''],
      telefone: [''],
      admin: false,
      endereco: [''],
      numero: [''],
      complemento: [''],
      cep: [''],
      estado: [''],
    });
  }

  get nome() {
    return this.usuarioForm.get('nome');
  }
  get sobrenome() {
    return this.usuarioForm.get('sobrenome');
  }
  get email() {
    return this.usuarioForm.get('email');
  }
  get senha() {
    return this.usuarioForm.get('senha');
  }
  get cpf() {
    return this.usuarioForm.get('cpf');
  }
  get telefone() {
    return this.usuarioForm.get('telefone');
  }
  get endereco() {
    return this.usuarioForm.get('endereco');
  }
  get numero() {
    return this.usuarioForm.get('numero');
  }
  get complemento() {
    return this.usuarioForm.get('complemento');
  }
  get cep() {
    return this.usuarioForm.get('cep');
  }
  get estado() {
    return this.usuarioForm.get('estado');
  }

  ResetForm() {
    this.usuarioForm.reset();
  }
  submitUsuarioData() {
    this.crudApi.AddUsuario(this.usuarioForm.value);
    alert(this.usuarioForm.controls['nome'].value + ' ' + this.usuarioForm.controls['sobrenome'].value + ' successfully added!');
    this.ResetForm();
  }
}

