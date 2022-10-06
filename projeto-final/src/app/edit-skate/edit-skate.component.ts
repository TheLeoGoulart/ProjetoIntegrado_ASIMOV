import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../shared/crud-skt/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-skate',
  templateUrl: './edit-skate.component.html',
  styleUrls: ['./edit-skate.component.css']
})
export class EditSkateComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    //private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.atualizarSkateData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetSkate(id)
      .valueChanges()
      .subscribe((data) => {
        this.editForm.setValue(data);
      });
  }

  get nome() {
    return this.editForm.get('nome');
  }
  get tamanho() {
    return this.editForm.get('tamanho');
  }
  get design() {
    return this.editForm.get('design');
  }
  get lixa() {
    return this.editForm.get('lixa');
  }
  get material() {
    return this.editForm.get('material');
  }
  get modelo() {
    return this.editForm.get('modelo');
  }
  get marca() {
    return this.editForm.get('marca');
  }
  get linha() {
    return this.editForm.get('linha');
  }
  get resina() {
    return this.editForm.get('resina');
  }

  atualizarSkateData() {
    this.editForm = this.fb.group({
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

  voltar() {
    this.location.back();
  }

  atualizarForm() {
    this.crudApi.UpdateSkate(this.editForm.value);
    //this.toastr.success(
      //this.editForm.controls['firstName'].value + ' updated successfully'
    //);
    this.router.navigate(['ver-skate']);
  }
}