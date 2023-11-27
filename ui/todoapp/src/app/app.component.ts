import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';
  readonly APIURL = 'http://localhost:5038/api/todoapp/';

  constructor(private http: HttpClient){
  }

  notes:any=[];

  getNotes(){
    this.http.get(this.APIURL+'GetNotes').subscribe(data=>{
      this.notes=data;
    })
  }

  ngOnInit(){
    this.getNotes();
  }

  addNote(){
    var newNotes=(<HTMLInputElement>document.getElementById('newNotes')).value;
    var formData=new FormData();
    formData.append('newNotes',newNotes);

    this.http.post(this.APIURL+'AddNotes',formData).subscribe(data=>{
      alert(data);
      this.getNotes();
      (<HTMLInputElement>document.getElementById('newNotes')).value="";
    })
  }

  deleteNote(id:any){
    this.http.delete(this.APIURL+'DeleteNotes?id='+id).subscribe(data=>{
      alert(data);
      this.getNotes();
    })
  }





}
