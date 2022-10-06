import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud-skt/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';

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
    //public toastr: ToastrService
  ) {}
  ngOnInit() {
    this.crudApi.GetSkateList();
    this.skaterForm();
  }

  skaterForm() {
    this.skateForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      tamanho: [''],
      design: [''],
      lixa: [''],
      material: [''],
      modelo: [''],
      marca: [''],
      linha: [''],
      resina: [''],
    });
  }

  get nome() {
    return this.skateForm.get('nome');
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
    //this.toastr.success(
      //this.usuarioForm.controls['firstName'].value + ' successfully added!'
    //);
    this.ResetForm();
  }
}

