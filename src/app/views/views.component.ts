import { Component, OnInit } from '@angular/core';
import { gsap, Power2, Expo } from 'gsap';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {
  menuToggle: HTMLElement | null = null;
  menuBar: gsap.core.Timeline = gsap.timeline({ paused: true });
  navTl: gsap.core.Timeline = gsap.timeline({ paused: true });

  constructor() { }

  ngOnInit(): void {
    this.menuToggle = document.getElementById('menuToggle');
    this.menuBar = gsap.timeline({ paused: true });

    this.menuBar.to('.bar-1', 0.5, {
      attr: { d: 'M8,2 L2,8' },
      x: 1,
      ease: Power2.easeInOut,
    }, 'start');

    this.menuBar.to('.bar-2', 0.5, {
      autoAlpha: 0,
    }, 'start');

    this.menuBar.to('.bar-3', 0.5, {
      attr: { d: 'M8,8 L2,2' },
      x: 1,
      ease: Power2.easeInOut,
    }, 'start');

    this.menuBar.reverse();

    this.navTl = gsap.timeline({ paused: true });

    this.navTl.to('.fullpage-menu', {
      duration: 0,
      display: 'block',
      ease: Expo.easeInOut,
    }, '<');

    this.navTl.to('.menu-bg', {
      duration: 1,
      opacity: 1,
      ease: Expo.easeInOut,
    }, '<');

    this.navTl.from('.main-menu li a', {
      duration: 1.0,
      y: '100%',
      rotateY: 30,
      stagger: 0.2,
      ease: Expo.easeInOut,
    }, '-=1.5');

    this.navTl.reverse();


    const menuItems = document.querySelectorAll('.main-menu li a');
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        this.menuBar.reverse();
        this.navTl.reverse();
      });
    });

    this.menuToggle?.addEventListener('click', () => {
      this.menuBar.reversed(!this.menuBar.reversed());
      this.navTl.reversed(!this.navTl.reversed());
    });
  }
}
