import { Component, OnInit } from '@angular/core';
import { AuthService } from '.././shared';
import { getDatabase, ref, onValue } from "firebase/database";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  public nome;
  public sobrenome;
  public admin;

  constructor(public authService: AuthService, public router: Router) {
  }

  ngOnInit(): void {
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
      //console.log(this.nome + this.sobrenome)
    });

    
  }
}
