import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent }   from './app.component';
import { AboutComponent }   from './about.component';
import { HomeComponent }   from './home.component';
import { NoteComponent }   from './note.component';
import { ContactComponent }   from './contact.component';
import { NotFoundComponent }   from './not-found.component';


import { ItemComponent }   from './item.component';

import { BoldDirective} from './bold.directive';
import { WhileDirective} from './while.directive';


// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'note', component: NoteComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [
                    AppComponent, HomeComponent,
                    AboutComponent, NoteComponent, NotFoundComponent,
                    ItemComponent, WhileDirective, ContactComponent, BoldDirective
                ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
