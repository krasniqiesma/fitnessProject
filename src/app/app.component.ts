import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showLoader: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.hideLoader();
    }, 1000);
  }

  hideLoader(): void {
    const progressBar = document.getElementById('progressBar');

    gsap.to(progressBar, {
      width: '100%',
      duration: 3,
      ease: 'power4.out',
      onComplete: () => {
        gsap.to(progressBar, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            this.showLoader = false;
          }
        });
      }
    });
  }

}


