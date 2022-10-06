import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { AngularFireDatabase, AngularFireList, AngularFireObject,} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})

export class CrudService {
  usuariosRef: AngularFireList<any>;
  usuarioRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  
  // Criar Usuario
  AddUsuario(usuario: Usuario) {
    this.usuariosRef.push({
      nome: usuario.nome,
      sobrenome: usuario.sobrenome,
      email: usuario.email,
      senha: usuario.senha,
      cpf: usuario.cpf,
      telefone: usuario.telefone,
      admin: usuario.admin,
      endereco: usuario.endereco,
      numero: usuario.numero,
      complemento: usuario.complemento,
      cep: usuario.cep,
      estado: usuario.estado,
    });
  }

  // Buscar objeto único de Usuario
  GetUsuario(key: string) {
    this.usuarioRef = this.db.object('usuarios-list/' + key);
    return this.usuarioRef;
  }

  // Buscar lista de Usuario
  GetUsuarioList() {
    this.usuariosRef = this.db.list('usuarios-list');
    return this.usuariosRef;
  }

  // Atualizar objeto Usuario
  UpdateUsuario(usuario: Usuario) {
    this.usuarioRef.update({
        nome: usuario.nome,
        sobrenome: usuario.sobrenome,
        email: usuario.email,
        senha: usuario.senha,
        cpf: usuario.cpf,
        telefone: usuario.telefone,
        admin: usuario.admin,
        endereco: usuario.endereco,
        numero: usuario.numero,
        complemento: usuario.complemento,
        cep: usuario.cep,
        estado: usuario.estado,
    });
  }

  // Deletar objeto Usuario
  DeleteUsuario(key: string) {
    this.usuarioRef = this.db.object('usuarios-list/' + key);
    this.usuarioRef.remove();
  }
}
