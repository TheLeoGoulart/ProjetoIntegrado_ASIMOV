import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../shared/crud-skt/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getDatabase, ref } from "firebase/database";

@Component({
  selector: 'app-edit-skate',
  templateUrl: './edit-skate.component.html',
  styleUrls: ['./edit-skate.component.css']
})
export class EditSkateComponent implements OnInit {
  editForm: FormGroup;
  filePath: string;
  key;

  constructor(
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private afStorage: AngularFireStorage,
  ) { }

  ngOnInit() {
    const db = getDatabase();
    const dbRef = ref(db, 'usuarios-list/');
    
    this.atualizarSkateData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.key = id;
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
  get valor() {
    return this.editForm.get('valor');
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
      design: [''],
      linha: ['', [Validators.required, Validators.minLength(2)]],
      lixa: ['', [Validators.required, Validators.minLength(2)]],
      marca: ['', [Validators.required, Validators.minLength(2)]],
      material: ['', [Validators.required, Validators.minLength(2)]],
      modelo: ['', [Validators.required, Validators.minLength(2)]],
      nome: ['', [Validators.required, Validators.minLength(2)]],
      resina: ['', [Validators.required, Validators.minLength(2)]],
      tamanho: ['', [Validators.required, Validators.minLength(1)]],
      valor: [''],
    });
  }

  voltar() {
    this.location.back();
  }

  atualizarForm() {
    //Update Realtime Database skate-list
    this.editForm.value.design = "Skate/" + this.key;
    this.crudApi.UpdateSkate(this.editForm.value);
    alert(this.editForm.controls['nome'].value + ' editado com sucesso!');
    
    //Update Storage Skate/
    this.afStorage.upload("Skate/" + this.key, this.filePath);
    
    this.router.navigate(['ver-skate']);
  }

  upload(event) {
    this.filePath = event.target.files[0]
  }
}