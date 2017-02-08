import { ColorPicker } from './color-picker';
import { NgIf } from '@angular/common/src/directives/ng_if';
import { partition } from 'rxjs/operator/partition';
import { 
    Component,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'note-creator',
    styles: [`
        .note-creator {
            padding: 20px;
            background-color: white;
            border-radius: 3px;
        }
        .title {
            font-weight: bold;
            color: rgba(0,0,0,0.8);
        }
        .full {
            height: 100px;
        }
    `], 
    template: `
        <div 
            class="note-creator shadow-2"
            [ngStyle]="{'background-color': newNote.color}"
        >
            <form 
                class="row"
                (submit)="onCreateNote()"
            >
                <input
                    type="text"
                    [(ngModel)]="newNote.title"
                    name="newNoteTitle"
                    placeholder="Title"
                    class="col-xs-10 title"
                    *ngIf="fullForm"
                >
                <input
                    type="text"
                    (focus)="toggle(true)"
                    [(ngModel)]="newNote.value"
                    name="newNoteValue"
                    placeholder="Take a note..."
                    class="col-xs-10"
                >
                <pre>{{newNote | json}}</pre>
                <div 
                    class="actions col-xs-12 row between-xs"
                    *ngIf="fullForm"
                > 
                <div class="col-xs-3">
                    <color-picker
                        [colors]="colors"
                        (selected)="onColorSelect($event)"
                    ></color-picker>
                </div>
                <button
                    type="submit"
                    class="btn-light"
                >
                    Done
                </button>
                </div>
            </form>
        </div>
    `
})
export class NoteCreator {
    @Output() createNote = new EventEmitter();

    colors: string[] = [
        'rgb(255, 138, 128)', 
        'rgb(255, 209, 128)', 
        'rgb(255, 255, 141)', 
        'rgb(207, 216, 220)', 
        'rgb(128, 216, 255)', 
        'rgb(167, 255, 235)', 
        'rgb(204, 255, 144)' 
    ];

    newNote = {
        title: '',
        value: '',
        color: 'white'
    };
    fullForm: boolean = false;

    onCreateNote(){
        const { title, value, color } = this.newNote;

        if(title && value && color){
            this.createNote.next({title, value, color})
            this.reset();
            this.toggle(false);    
        }
    }

    reset(){
        this.newNote = {
            title: '',
            value: '',
            color: 'white'
        }
    }

    toggle(value: boolean){
        this.fullForm = value;
    }

    onColorSelect(color: string){
        this.newNote.color = color;
    }
};