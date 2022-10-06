import { Component, OnInit } from '@angular/core';
import { CrudService, Usuario } from '../shared';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  p: number = 1;
  usuarios: Usuario[];
  esconderUsuarioNulo: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    public crudApi: CrudService,
    //public toastr: ToastrService
  ) { }

  ngOnInit() {
    this.dataState();
    let s = this.crudApi.GetUsuarioList();
    s.snapshotChanges().subscribe(data => {
      this.usuarios = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.usuarios.push(a as Usuario);
      })
    })
  }

  dataState() {
    this.crudApi.GetUsuarioList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.esconderUsuarioNulo = false;
        this.noData = true;
      } else {
        this.esconderUsuarioNulo = true;
        this.noData = false;
      }
    })
  }
  deleteUsuario(usuario) {
    if (window.confirm('Você tem certeza que deseja apagar este usuário ?')) {
      this.crudApi.DeleteUsuario(usuario.$key)
      //this.toastr.success(usuario.nome + usuario.sobrenome + 'Deletado com sucesso!');
    }
  }
}