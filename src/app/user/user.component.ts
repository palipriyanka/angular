import { Component, OnInit } from '@angular/core';
import { User1 } from '../_models/user1';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  post=new User1(0,'nagineni karthik',560000);
list :any;
HasError:boolean=false;
p=1;
name:any;
term:string;

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.getData2()
  }
getData1(){
  this.HasError=true;
}
getData2(){
  this.userservice.getData().subscribe(data=>{this.list=data});
}
postDetails(){
  this.userservice.postData(this.post).subscribe(data=>console.log("success",data))
};
Delete(id){
  this.userservice.Delete(id);
}
Search(){
  if(this.name==""){
    this.ngOnInit();
  }
  else{
    this.list=this.list.filter(res=>{
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
}
}
