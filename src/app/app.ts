import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div class="main-container">
            <router-outlet></router-outlet>
        </div>
    `
})
export class App {};
