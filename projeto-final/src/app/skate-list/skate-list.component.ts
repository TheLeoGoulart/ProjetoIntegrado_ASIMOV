import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud-skt/crud.service';
import { Skate } from '../shared';
import { getStorage, ref as refS, deleteObject, getDownloadURL } from "firebase/storage";
import { getDatabase, ref } from "firebase/database";

@Component({
  selector: 'app-skate-list',
  templateUrl: './skate-list.component.html',
  styleUrls: ['./skate-list.component.css']
})
export class SkateListComponent implements OnInit {
  p: number = 1;
  skates: Skate[];
  skateImg: String[];
  esconderSkateNulo: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    public crudApi: CrudService,
  ) { }

  ngOnInit() {
    const db = getDatabase();
    const storage = getStorage();
    const dbRef = ref(db, 'usuarios-list/');
    
    this.dataState();
    let s = this.crudApi.GetSkateList();
    s.snapshotChanges().subscribe(data => {
      this.skates = [];
      this.skateImg = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;

        getDownloadURL(refS(storage, 'Skate/'+item.key))
        .then((url) => {
          this.skateImg.push(url);
        })
        this.skates.push(a as Skate);
      })
    })
  }

  dataState() {
    this.crudApi.GetSkateList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.esconderSkateNulo = false;
        this.noData = true;
      } else {
        this.esconderSkateNulo = true;
        this.noData = false;
      }
    })
  }
  deleteSkate(skate) {
    if (window.confirm('Você tem certeza que deseja apagar este Skate ?')) {
      this.crudApi.DeleteSkate(skate.$key);
      
      const storage = getStorage();
      const desertRef = refS(storage, `Skate/${skate.$key}`);
      deleteObject(desertRef).then(() => {})
    }
  }
}