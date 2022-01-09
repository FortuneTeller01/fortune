import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fortune',
  templateUrl: './fortune.component.html',
  styleUrls: ['./fortune.component.scss']
})
export class FortuneComponent implements OnInit {

  numbers: number[] = [];
  numbersNow: number[] = [3,75,1,29,15,86,42,13,66,77,88,63,87,80,82,40,5,48,2,58]

  fortuneForm = new FormGroup({
    num: new FormControl(''),
    numbers: new FormControl(''),
    calcNum: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  addNum() {
    this.numbers.push(this.fortuneForm.get('num')?.value)
    this.fortuneForm.get('numbers')?.setValue(this.numbers)
    this.fortuneForm.get('num')?.reset()
  }
  calcFortune(){
    this.numbers.sort(()=>(Math.random() > .5)? 1 : -1);
    this.fortuneForm.get('calcNum')?.setValue(this.numbers.slice(0, 5))
  }
}
