import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { UserService } from '../../user.service'
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  sub
  mainuser: AngularFirestoreDocument
  username: string;
  lastname: string;
  firstname: string;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    public user: UserService
  ) { 
    this.mainuser = afs.doc(`users/${afAuth.auth.currentUser.uid}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.lastname = event.lastname
			this.username = event.username
			this.firstname = event.firstname
		})   
  }

  ngOnInit() {
  }

}
