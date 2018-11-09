import { Component} from '@angular/core';

/*export class Names{
    constructor(public name: string,
                       phone: string
    )  { }
}*/

export class User{
    name: string;
    description: string;
    phone: string;
}

@Component({
    selector: 'note-app',
    template: `<div class="form-group">
          <div class="form-inline">

          <h1>Записаться на прием</h1>

                  <div class="field">
                    <label class="lab" for="in2">ФИО</label>
                    <input class="form-control" name="name" [(ngModel)]="user.name" #name="ngModel" required/>
                  </div>

                  <div class="field">
                    <label class="lab" for="in3">Контактный телефон</label>
                    <input class="form-control" nname="phone" [(ngModel)]="user.phone" #phone="ngModel" required pattern="[0-9]{10}" />
                  </div>

                  <div class="field">
                    <label class="lab" for="in5">Комментарий</label>
                    <textarea class="form-control" name="description" [(ngModel)]="user.description" #description="ngModel" required></textarea>
                  </div>

                  <span>Нажимая кнопку, я принимаю <a>соглашение о конфиденциальности</a> и соглашаюсь с обработкой персональных данных</span>

                  <button class="but" [disabled]="name.invalid || description.invalid || phone.invalid">Отправить</button>

            </div>


    </div>`,
    styleUrls: ['./css/about.component.css']
})
export class NoteComponent {

  user: User = new User();
    addUser(){
        console.log(this.user);
    }
  /*name: string[] = ["ФИО"];
  phone: string[] = ["Контактный телефон"];*/
 }

 /*<div class="form-group">
     <h1>Записаться на прием</h1>
       <input class="form-control" name="title" placeholder="ФИО" />
       <input class="form-control" name="title" placeholder="Контактный телефон" />
       <input class="form-control bottom" name="title" placeholder="Комментарий" />
       <span>Нажимая кнопку, я принимаю <a>соглашение о конфиденциальности</a> и соглашаюсь с обработкой персональных данных</span>
       <button class="but">Отправить</button>
 </div>*/
