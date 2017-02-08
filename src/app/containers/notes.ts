import { NoteCreator } from '../ui/note-creator';
import { Component } from '@angular/core';

@Component({
    selector: 'notes-container',
    styles: [`
        .notes {
            padding-top: 50px;
        }
        .creator {
            margin-bottom: 40px; 
        }
    `],
    template: `
        <div class="row center-xs notes">
            <div class="col-xs-6 creator">
                <note-creator
                    (createNote)="onCreateNote($event)"
                >
                </note-creator>
            </div>
            <div class="notes col-xs-8">
                <div class="row between-xs">
                <note-card
                    class="col-xs-4"
                    [note]="note"
                    *ngFor="let note of notes; let i = index"
                    (checked)="onNoteChecked(i)"
                >
                </note-card>
                </div>
            </div>
        </div>
    `
})
export class NotesContainer {
    notes = [
        {title: 'Chores', value: 'Don\'t forget to clean up', color: 'rgb(255, 138, 128)'},
        {title: 'Cook', value: 'Cook your food', color: 'rgb(255, 209, 128)'},
        {title: 'Doggy', value: 'Walk the dog', color: 'rgb(255, 255, 141)'},
    ]

    onNoteChecked(i: number){
        this.notes.splice(i, 1);
    }

    onCreateNote(note){
        this.notes.push(note);
    }
};