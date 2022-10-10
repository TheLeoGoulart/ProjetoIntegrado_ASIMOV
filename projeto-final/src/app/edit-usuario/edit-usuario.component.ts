import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { getDatabase, ref } from "firebase/database";

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    const db = getDatabase();
    const dbRef = ref(db, 'usuarios-list/');

    this.atualizarUsuarioData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetUsuario(id)
      .valueChanges()
      .subscribe((data) => {
        this.editForm.setValue(data);
      });
  }

  get nome() {
    return this.editForm.get('nome');
  }
  get sobrenome() {
    return this.editForm.get('sobrenome');
  }
  get email() {
    return this.editForm.get('email');
  }
  get cpf() {
    return this.editForm.get('cpf');
  }
  get telefone() {
    return this.editForm.get('telefone');
  }
  get endereco() {
    return this.editForm.get('endereco');
  }
  get numero() {
    return this.editForm.get('numero');
  }
  get complemento() {
    return this.editForm.get('complemento');
  }
  get cep() {
    return this.editForm.get('cep');
  }
  get estado() {
    return this.editForm.get('estado');
  }

  atualizarUsuarioData() {
    this.editForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      sobrenome: [''],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
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

  voltar() {
    this.location.back();
  }

  atualizarForm() {
    this.crudApi.UpdateUsuario(this.editForm.value);
    alert(this.editForm.controls['firstName'].value + ' atualizado com sucesso');
    this.router.navigate(['ver-usuario']);
  }
}