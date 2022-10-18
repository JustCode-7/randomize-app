import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-planning-poker',
  templateUrl: './planning-poker.component.html',
  styleUrls: ['./planning-poker.component.scss']
})
export class PlanningPokerComponent implements OnInit {
  cardArr: any[] = [];

  @ViewChild("myCard", {read: ElementRef}) myCard: ElementRef | undefined;

  constructor(myCard: ElementRef) {
  }

  ngOnInit(): void {
    this.cardArr = this.createFibonacci();
  }

  createFibonacci() {
    let arr = [];
    let fiboArr: number[] = [];
    for (let i = 0; i <= 12; i++) {
      arr[i] = i + 1;
    }
    arr.forEach((el, i) => {
      if (i == 0 || i == 1) {
        fiboArr.push(1);
      } else {
        fiboArr.push(fiboArr[i - 1] + fiboArr[i - 2]);
      }
    });
    return fiboArr.splice(1, fiboArr.length - 1);
  }

  changeState(cardIndex: number) {
    // let i = cardIndex;
    // this.cardArr.forEach((card, index) => {
    //   this.myCard = card;
    //   if (index == i) {
    //     console.log("Hello " + index + " " + card + " " + this.myCard);
    //   }
    // });
  }
}
