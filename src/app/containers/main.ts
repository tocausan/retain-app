import { Component } from '@angular/core';

@Component({
    selector: 'main-container',
    template: `
        <div>
            <main class="main">
                <router-outlet></router-outlet>
            </main>
        </div>
    `
})
export class Main {};