import { Component } from '@angular/core';

@Component({
    selector: 'main-container',
    template: `
        <div>
            <main class="main">
                <notes-container></notes-container>
            </main>
        </div>
    `
})
export class Main {};