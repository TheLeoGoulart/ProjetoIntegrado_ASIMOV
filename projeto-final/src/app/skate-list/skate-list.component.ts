import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud-skt/crud.service';
import { Skate } from '../shared';

@Component({
  selector: 'app-skate-list',
  templateUrl: './skate-list.component.html',
  styleUrls: ['./skate-list.component.css']
})
export class SkateListComponent implements OnInit {
  p: number = 1;
  skates: Skate[];
  esconderSkateNulo: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    public crudApi: CrudService,
  ) { }

  ngOnInit() {
    this.dataState();
    let s = this.crudApi.GetSkateList();
    s.snapshotChanges().subscribe(data => {
      this.skates = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
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
      this.crudApi.DeleteSkate(skate.$key)
    }
  }
}