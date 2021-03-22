import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  name: any;
  age: any;
  gender: any;
  currentStudent: any;
  constructor(
    private firestore: AngularFirestore 
  ) { }

  ngOnInit(): void {
    this.currentStudent = JSON.parse(localStorage.getItem('editStudentData') || '{}');
    console.log(this.currentStudent);
    
    this.name = this.currentStudent.name;
    this.age = this.currentStudent.age;
    this.gender = this.currentStudent.gender;
  }
  updateStudent(){
  alert(this.currentStudent.id);

  let record = {
    name: this.name,
    age: this.age,
    gender: this.gender
  }

  console.log(record);

  this.firestore.collection("students").doc(this.currentStudent.id).update(record)
  .then(() => {
    console.log("Student updated sucessfully!");
  })
  .catch((error: any) => {
    console.error("Error updating document: ", error);
  });

  }
}
