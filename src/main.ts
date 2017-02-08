import { formatMessageChain } from 'awesome-typescript-loader/dist/helpers';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './app/app';
import { Main, NotesContainer } from './app/containers';
import { AppBar, NoteCard, NoteCreator } from './app/ui'

@NgModule({
    declarations: [
        App,
        Main,
        AppBar,
        NoteCard,
        NotesContainer,
        NoteCreator
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [App]
})
export class AppModule {};

platformBrowserDynamic().bootstrapModule(AppModule);