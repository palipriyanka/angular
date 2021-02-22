import { Component, OnInit } from '@angular/core';
import { Users } from '../_models/users';
import { EnrollmentService } from '../_services/enrollment.service';
  


@Component({
  selector: 'app-angular-form-example',
  templateUrl: './angular-form-example.component.html',
  styleUrls: ['./angular-form-example.component.css']
})



export class AngularFormExampleComponent implements OnInit {
topics=["Angular","Ruby","Selenium"];
topicHasError=true;
submitted = false;
errorMsg = '';
userModel=new Users('John', 'john@example.com', 9999988888, 'default', 'morning', true);
  constructor(private enrollmentService: EnrollmentService) { }
  validateTopic(topic: string) {
    if(topic === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    this.enrollmentService.enroll(this.userModel)
        .subscribe(
          data => console.log('Success!', data),
          error => this.errorMsg = error.statusText
        );
  }
}
