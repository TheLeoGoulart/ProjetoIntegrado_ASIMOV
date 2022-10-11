import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud-skt/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getDatabase, ref, onValue } from "firebase/database";

@Component({
  selector: 'app-add-skate',
  templateUrl: './add-skate.component.html',
  styleUrls: ['./add-skate.component.css']
})
export class AddSkateComponent implements OnInit {
  public skateForm: FormGroup;
  public filePath: String;
  public imageUrl: String;
  public key: String;

  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    private afStorage: AngularFireStorage,
  ) { }

  ngOnInit() {
    const db = getDatabase();
    const dbRef = ref(db, 'usuarios-list/');
    
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
    //Cadastro Realtime Database skate-list
    this.crudApi.AddSkate(this.skateForm.value);
    alert(this.skateForm.controls['nome'].value + ' adicionado com sucesso!')

    const db = getDatabase();
    const dbRef = ref(db, 'skate-list/');
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        this.key = childKey;
      });
    });

    //Update Realtime Database skate-list.design
    this.skateForm.value.design = "Skate/" + this.key;
    this.crudApi.UpdateSkate(this.skateForm.value);


    this.afStorage.upload("Skate/" + this.key, this.filePath);
    this.ResetForm();
  }

  upload(event) {
    this.filePath = event.target.files[0]
  }

}

