import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DataBindingComponent implements OnInit {
  //Interpolation
  FirstName:string='ABC';
  LastName:string='XYZ';
  Salary=10000;
  name=null;
  GetFullName():string{
    return this.FirstName+ ' '+ this.LastName;
  }
  ImagePath:string="data:image/png;base64,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";
  
  //Property Binding
  Title:string="Welcome to Angular Tutorials."
  path:string="png;base64,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";
  IsDisabledClick:boolean=true;

  //Attribute Binding
  pageHeader:string="Student Details";
  ColumnSpan:number=2;

  //Class Binding
  ClassesToApply : string = 'italicClass boldClass';
  ApplyBoldClass: boolean = true;
    ApplyItalicsClass: boolean = true;
    AddCSSClasses() {
        let Cssclasses = {
            boldClass: this.ApplyBoldClass,
            italicsClass: this.ApplyItalicsClass
        };
        return Cssclasses;
      }

      //Style Binding
      IsBold:boolean=true;
      FontSize:number=15;
      IsItalic:boolean=true;
      AddCSSStyles() {
        let CssStyles = {
            'font-weight': this.IsBold ? 'bold' : 'normal',
            'font-style': this.IsItalic ? 'italic' : 'normal',
            'font-size.px': this.FontSize
        };
        return CssStyles;
    }
  
    //Event Binding
    showDetails:boolean=false;
    ToggleDetails(){
      return !this.showDetails;
    }
    OnClick():void{
      console.log("Submit button is clicked");
    }

    //Two Way Data Binding
    Name:string="ABCDE";
  constructor() { }

  ngOnInit(): void {
  }

}