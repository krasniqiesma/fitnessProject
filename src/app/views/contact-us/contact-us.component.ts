import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animateContactForm();
  }
    animateContactForm() {
      gsap.from('.form-group', .4,{
        x:-500,
        scale: .4,
        stagger: .5,
        ease: "expo.out",
        delay: 1,
        opacity: 0
      });

      gsap.from('p', 2.5,{
        scale:.5,
        opacity: 0,
        delay: 1,
        ease: "elastic.out(1, 0.3)"
      })

      gsap.from('.dbox', 1.4,{
        x:500,
        scale: .4,
        stagger: .5,
        ease: "elastic.out(1, 0.7)",
        delay: 1,
        opacity: 0
      });

      gsap.from('h2', 1, {
        x:500,
        scale: .2,
        opacity: 0
      })
  }

}
