import { Component } from '@angular/core';

@Component({
    selector: 'main-container',
    template: `
        <div>
            <main class="main">
                <app-bar></app-bar>
                <router-outlet></router-outlet>
            </main>
        </div>
    `
})
export class Main {};