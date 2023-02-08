import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form: FormGroup;
loading = false;
constructor(private fb: FormBuilder, private _snackBar: MatSnackBar ){
  this.form = this.fb.group({
    usuario:['', Validators.required],
    password:['', Validators.required]
  })
}

ngOnInit(): void{}

ingresar(): void{
    console.log(this.form)
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    
    if(usuario=='nelson' && password=='0000'){
     // dashboard
     this.fakeLoading();
    }else{
      //error message
      this.error();
      this.form.reset();
    }
}

error(){
  this._snackBar.open('Usuario y/o contraseña incorrectos', '', {
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
    duration: 5000
  })
}

fakeLoading() {
  this.loading = true;
  setTimeout(() => {
    this.loading = false;
}, 1500);
}

}
