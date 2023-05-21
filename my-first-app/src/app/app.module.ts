import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentComponent} from './student/student.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DataBindingComponent } from './DataBinding/databinding.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCountComponent } from './student-count/student-count.component';
import { DirectivesComponent } from './directives/directives.component';
import { MyTitlePipe } from './my-title.pipe';

@NgModule({
  declarations: [
    AppComponent,StudentComponent, WarningAlertComponent, SuccessAlertComponent,DataBindingComponent, StudentListComponent, StudentCountComponent, DirectivesComponent, MyTitlePipe
  
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
