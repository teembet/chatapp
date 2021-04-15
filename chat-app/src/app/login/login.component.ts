import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthserviceService } from "../_services/authservice.service";
import { from } from "rxjs";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  ngOnInit() {}

  loginForm: FormGroup;
  errorMessage: string = "";

  constructor(
    public authService: AuthserviceService,
    // private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  tryLogin(value) {
    console.log(value);
  }
}
