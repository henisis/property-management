import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
  addForm: FormGroup = new FormGroup({});


  UserArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;


  fname: string ="";
  lname: string ="";
  email: string ="";
  cemail: string ="";
  currentUserId = "";



  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllUser();
  }




  getAllUser()
  {
    this.http.get("http://localhost:8085/api/user_table")
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log (resultData.data);
        this.UserArray = resultData.data;
    });
  }

  register()
  {
   // this.isLogin = false;
   // alert("hi");

    let bodyData = {
      "fname" : this.fname,
      "lname" : this.lname,
      "email" : this.email,
      "cemail" : this.cemail,
    };



    this.http.post("http://localhost:8085/api/user_table/",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
       alert("User Added Successfully")
       this.getAllUser();
      //  this.name = '';
      //  this.address = '';
      //  this.email  = 0;
   });
  }

  setUpdate(data: any)
  {
   this.fname = data.fname;
   this.lname = data.lname;
   this.email = data.email;
   this.cemail = data.cemail;

   this.currentUserId = data.userid;

  }
  UpdateRecords()
  {
    let bodyData =
    {
      "fname" : this.fname,
      "lname" : this.lname,
      "email" : this.email,

    };

    this.http.put("http://localhost:8085/api/user_table/"+ "/"+
  this.currentUserId,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Registered Updated")
        this.getAllUser();

    });
  }

  save()
  {
    if(this.currentUserId == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }
  }


  setDelete(data: any)
  {
    this.http.delete("http://localhost:9002/api/user_table/"+ "/"+ data.userid).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Deleted")
        this.getAllUser();
    });
  }
}



