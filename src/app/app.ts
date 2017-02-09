import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div class="main-container">
            <app-bar></app-bar>
            <router-outlet></router-outlet>
        </div>
    `
})
export class App {};
