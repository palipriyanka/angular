import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { InputEventDemoComponent } from './input-event-demo/input-event-demo.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { SwitchexampleComponent } from './switchexample/switchexample.component';
import { IfelseexampleComponent } from './ifelseexample/ifelseexample.component';
import { TemplatereferencevariableComponent } from './templatereferencevariable/templatereferencevariable.component';
import { AngularpipesComponent } from './angularpipes/angularpipes.component';
import { ForexampleComponent } from './forexample/forexample.component';
import { EmployeesReportComponent } from './employees-report/employees-report.component';
import { EmployeesReport1Component } from './employees-report1/employees-report1.component';

import { FormsExample1Component } from './forms-example1/forms-example1.component';
import { AngularFormExampleComponent } from './angular-form-example/angular-form-example.component';
// import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { UserComponent } from './user/user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    TwoWayDataBindingComponent,
    InputEventDemoComponent,
    ClassBindingComponent,
    SwitchexampleComponent,
    IfelseexampleComponent,
    TemplatereferencevariableComponent,
    AngularpipesComponent,
    ForexampleComponent,
    EmployeesReportComponent,
    EmployeesReport1Component,
   
    FormsExample1Component,
   
    AngularFormExampleComponent,
    
   
    // ReactiveFormsComponent,
   
    UserComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
