import { Component, OnInit } from '@angular/core';
import { AuthService } from '.././shared';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { switchMap } from 'rxjs';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/compat/database';
import { DataSnapshot } from '@angular/fire/compat/database/interfaces';
import { getDatabase, ref, get, child, query, orderByChild, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public nome;
  public sobrenome;

  constructor(public authService: AuthService, public db: AngularFireDatabase) {
    db.list('usuarios-list/', ref => ref.orderByChild('email').equalTo('teste@gmail.com'))
  }

  ngOnInit(): void {
    const app = initializeApp(environment.firebase);

    const db = getDatabase();
    const dbRef = ref(db, 'usuarios-list/');

    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        if (childData.email == this.authService.userData.email)
        {
          this.nome = childData.nome;
          this.sobrenome = childData.sobrenome;
        }
      });
    });

    
  }
}
