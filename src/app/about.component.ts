import { Component} from '@angular/core';


@Component({
    selector: 'about-app',
    templateUrl: './html/about.component.html',
    styleUrls: ['./css/about.component.css']
})
export class AboutComponent {

  condition: boolean=true;
  station: boolean=true;
  stationT: boolean=true;
  stationTh: boolean=true;
  stationF: boolean=true;
  stationFi: boolean=true;
  stationSi: boolean=true;
  stationSe: boolean=true;
  stationEi: boolean=true;

    toggle(){
        this.condition=!this.condition;
    }

    toggleO(){
        this.station=!this.station;
    }

    toggleT(){
        this.stationT=!this.stationT;
    }

    toggleTh(){
        this.stationTh=!this.stationTh;
    }

    toggleF(){
        this.stationF=!this.stationF;
    }

    toggleFi(){
        this.stationFi=!this.stationFi;
    }

    toggleSi(){
        this.stationSi=!this.stationSi;
    }

    toggleSe(){
        this.stationSe=!this.stationSe;
    }

    toggleEi(){
        this.stationEi=!this.stationEi;
    }
  /*clickMe() {
        console.log("dgfdggf");
    }*/

    /*increase() : void {
     console.log("dgfdggf");
   }*/
 }
