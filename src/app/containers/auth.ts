import { Component, style } from '@angular/core';
import { AuthService } from '../services';
import { Router } from '@angular/router';

@Component({
    selector: 'auth-container',
    styles: [`
        .auth {
            height: 100%;
        }
        input {
            border-bottom: 1px solid lightgrey;
        }
        .ng-invalid.ng-dirty {
            border-bottom: 1px solid red;
        }
        form {
            width: 100%;
            border-radius: 2px;
            background-color: white;
            padding: 20px;
            height: 400px;
        }
        .inputs {
            height: 100%;
            position: relative;
        }
        .link {
            color: lightblue;
        }
        .link:hover {
            background-color: transparent;
        }
        .title {
            font-size: 36px;
            font-weight: 300;
            text-transform: capitalize;
        }
        .error {
            color: red;
            position: absolute;
            right: 20px; 
        }
    `],
    template: ` 
        <div class="auth row center-xs middle-xs">
            <form 
                class="col-xs-6 shadow-2"
                #authForm="ngForm"
                (submit)="authenticate()"
            >
                <div class="inputs row center-xs middle-xs">
                <h3 class="col-xs-8 title">
                    {{ mode }}
                </h3>
                <input
                    class="col-xs-8"
                    type="email"
                    name="model"
                    required
                    [(ngModel)]="user.email"
                    placeholder="email"
                    #email="ngModel"
                >
                <div 
                    [hidden]="email.valid || email.pristine"
                    class="error"
                >
                    email is invalid
                </div>
                <input
                    class="col-xs-8"
                    type="password"
                    name="password"
                    required
                    [(ngModel)]="user.password"
                    placeholder="password"
                    #password="ngModel"
                >
                <div 
                    [hidden]="password.valid || password.pristine"
                    class="error"
                >
                    password is required
                </div>
                <div class="actions col-xs-12">
                    <div class="row center-xs">
                    <button 
                        type="submit" 
                        class="btn-light"
                        [disabled]="!authForm.form.valid"
                    >
                        {{ mode }}
                    </button>
                    <a
                        class="btn-light link"
                        (click)="changeMode()"
                    >
                        {{ linkText }}
                    </a>
                    </div>
                </div>
                </div>
            </form>
        </div>
    `
}) 
export class Auth {
    user = {
        email: '',
        password: ''
    }

    mode: string = 'signin';
    linkText: string = 'Don\'t have an account ?';

    constructor(
        private router: Router,
        private auth: AuthService
    ){}

    changeMode(){
        if(this.mode === 'signin'){
            this.mode = 'signup';
            this.linkText = 'Already have an account ?';
        } else{
            this.mode = 'signin';
            this.linkText = 'Don\'t have an account ?';
        }
    }

    authenticate(){
        this.auth.authenticate(this.mode, this.user)
            .subscribe(() => this.router.navigate(['']));
    }
};