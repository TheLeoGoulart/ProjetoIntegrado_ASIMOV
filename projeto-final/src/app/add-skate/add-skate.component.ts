import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud-skt/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-skate',
  templateUrl: './add-skate.component.html',
  styleUrls: ['./add-skate.component.css']
})
export class AddSkateComponent implements OnInit {
  public skateForm: FormGroup;
  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
  ) {}
  ngOnInit() {
    this.crudApi.GetSkateList();
    this.skaterForm();
  }

  skaterForm() {
    this.skateForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      valor: [''],
      tamanho: ['', [Validators.required, Validators.minLength(1)]], 
      design: [''],
      lixa: ['', [Validators.required, Validators.minLength(2)]],
      material: ['', [Validators.required, Validators.minLength(2)]],
      modelo: ['', [Validators.required, Validators.minLength(2)]],
      marca: ['', [Validators.required, Validators.minLength(2)]],
      linha: ['', [Validators.required, Validators.minLength(2)]],
      resina: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  get nome() {
    return this.skateForm.get('nome');
  }
  get valor() {
    return this.skateForm.get('valor');
  }
  get tamanho() {
    return this.skateForm.get('tamanho');
  }
  get design() {
    return this.skateForm.get('design');
  }
  get lixa() {
    return this.skateForm.get('lixa');
  }
  get material() {
    return this.skateForm.get('material');
  }
  get modelo() {
    return this.skateForm.get('modelo');
  }
  get marca() {
    return this.skateForm.get('marca');
  }
  get linha() {
    return this.skateForm.get('linha');
  }
  get resina() {
    return this.skateForm.get('resina');
  }

  ResetForm() {
    this.skateForm.reset();
  }
  submitSkateData() {
    this.crudApi.AddSkate(this.skateForm.value);
    alert(this.skateForm.controls['nome'].value + ' adicionado com sucesso!')
    this.ResetForm();
  }
}

