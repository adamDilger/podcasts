import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-audioplayer',
  templateUrl: './audioplayer.component.html',
  styleUrls: ['./audioplayer.component.scss']
})
export class AudioplayerComponent implements OnInit {

  @ViewChild('player') myDiv: ElementRef;

  constructor() { }

  ngOnInit() {
    this.player = this.myDiv.nativeElement;
    this.player.addEventListener('canplay', e => this.onCanPlay(e));
  }

  onCanPlay() {
    console.log('canplay')
    console.log(this.player.duration)
  }

  nudgeTime(value) {
    if (!value) return;
    let player = this.player;
    let original = player.currentTime;

    player.currentTime += value;

    console.log(`nudging time by ${value}s | (${original}) -> (${player.currentTime})`);
  }
}
