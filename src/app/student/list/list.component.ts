import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  allStudent:any = [];

  constructor(
    private router: Router,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.firestore.collection("students").get().subscribe((ss) => {
      ss.docs.forEach((doc) => {
        let obj: any = doc.data();
        obj.id = doc.id;
        this.allStudent.push(obj);
      });
    });
    // console.log(this.allStudent);
    
  }

  goToAddPage(){
    this.router.navigate(['/student/add']);
  }

  goToEditPage(item: any){
    localStorage.setItem("editStudentData", JSON.stringify(item));
    this.router.navigate(['/student/edit']);
  }

}
