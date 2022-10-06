import { Injectable } from '@angular/core';
import { Skate } from './skate';
import { AngularFireDatabase, AngularFireList, AngularFireObject,} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})

export class CrudService {
  skatesRef: AngularFireList<any>;
  skateRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  
  AddSkate(skate: Skate) {
    this.skatesRef.push({
      nome: skate.nome,        
      tamanho: skate.tamanho,
      design: skate.design,
      lixa: skate.lixa,
      material: skate.material,
      modelo: skate.modelo,
      marca: skate.marca,
      linha: skate.linha,
      resina: skate.resina,
    });
  }

  GetSkate(key: string) {
    this.skateRef = this.db.object('skate-list/' + key);
    return this.skateRef;
  }

  GetSkateList() {
    this.skatesRef = this.db.list('skate-list');
    return this.skatesRef;
  }

  UpdateSkate(skate: Skate) {
    this.skateRef.update({
        nome: skate.nome,        
        tamanho: skate.tamanho,
        design: skate.design,
        lixa: skate.lixa,
        material: skate.material,
        modelo: skate.modelo,
        marca: skate.marca,
        linha: skate.linha,
        resina: skate.resina,
    });
  }

  DeleteSkate(key: string) {
    this.skateRef = this.db.object('skate-list/' + key);
    this.skateRef.remove();
  }
}
