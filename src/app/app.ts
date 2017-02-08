import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div class="main-container">
            <app-bar></app-bar>
            <main-container></main-container>
        </div>
    `
})
export class App {};
