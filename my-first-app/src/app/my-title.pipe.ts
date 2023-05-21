import { Pipe, PipeTransform } from '@angular/core';
import { StudentComponent } from './student/student.component';

@Pipe({
  name: 'myTitle'
})
export class MyTitlePipe implements PipeTransform {

  transform(name:string,gender:string): string {
    if(gender.toLowerCase()=='male')
    {
      return "Mr."+name;
    }
    else
    return "Ms." +name;
  }

}
