import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('pinedList') pinedListRef!: ElementRef;
  @ViewChild('pinedInner') pinedInnerRef!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const pinedList = this.pinedListRef.nativeElement;
    const pinedInner = this.pinedInnerRef.nativeElement;

    gsap.to(pinedList, {
      x: -pinedList.clientWidth + pinedInner.clientWidth,
      scrollTrigger: {
        trigger: ".pined",
        start: "top top",
        end: `+=${pinedList.clientWidth}`,
        pin: true,
        scrub: 1
      }
    });
  }
}
