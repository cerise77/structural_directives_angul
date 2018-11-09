import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div class="sticky">
                    <nav [ngClass]="{header:true}">
                        <a routerLink="">О компании</a>
                        <a routerLink="/about">Услуги</a>
                        <a routerLink="/note">Запись на прием</a>
                        <a routerLink="/contact">Контакты</a>
                    </nav>
                    <router-outlet></router-outlet>
               </div>`,
    styleUrls: ['./css/main.component.css']
})
export class AppComponent {}
