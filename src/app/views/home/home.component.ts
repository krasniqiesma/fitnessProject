import { Component, ElementRef, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animateText();
    this.animateDivs();
  }

  // BANNER
  animateText() {
    gsap.from('.hero-content', {
      duration: 2,
      x: -100,
      opacity: 0,
      ease: 'power2.inOut'
    });
  }

  
// COACHES
  animateDivs(): void {
    gsap.from('.div1', {
      scrollTrigger: {
        trigger: '.div1',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      },
      duration: 1,
      y: -100,
      autoAlpha: 1,
      ease: 'power1.out'
    });

    gsap.from('.div2', {
      scrollTrigger: {
        trigger: '.div2',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      },
      duration: 1,
      y: 100,
      autoAlpha: 1,
      ease: 'power1.out'
    });

    gsap.from('.div3', {
      scrollTrigger: {
        trigger: '.div3',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      },
      duration: 1,
      y: -100,
      autoAlpha: 1,
      ease: 'power1.out'
    });

    gsap.from('.div4', {
      scrollTrigger: {
        trigger: '.div4',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      },
      duration: 1,
      y: 100,
      autoAlpha: 1,
      ease: 'power1.out'
    });
  }
}
