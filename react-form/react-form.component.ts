import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './confirmPassword';


@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {

  myForm:any= FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      title:['', Validators.required],
      firstName:['',Validators.required],
      lastName:['', Validators.required],
      email:['',[Validators.required, Validators.email]],
      tel:['', [Validators.required, Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)]],
      password:['',[Validators.required, Validators.minLength(8)]],
      confirmPassword:['', Validators.required],
      acceptTerms:[false, Validators.requiredTrue]
    },{
      validator:MustMatch('password', 'confirmPassword')
    });


  }

get f(){return this.myForm.controls;}

  onSubmit() {
    this.submitted = true;

    if (this.myForm.invalid) {
        return;
    }

    alert("Success!!!");
}

onReset() {
    this.submitted = false;
    this.myForm.reset();
}
}
