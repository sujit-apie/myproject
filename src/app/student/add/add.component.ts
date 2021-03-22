import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  name: any;
  age: any;
  gender: any;

  constructor(private router: Router,
    private firestore: AngularFirestore ) { }

  ngOnInit(): void {
  }

  createStudent() {

    let record = {
      name: this.name,
      age: this.age,
      gender: this.gender
    }

    console.log(record);
    

    this.firestore.collection("students").add(record)
      .then(() => {
        console.log("Student added sucessfully!");
      })
      .catch((error: any) => {
        console.error("Error creating document: ", error);
      });

    // this.router.navigate(['/student/list']);
  }


}
