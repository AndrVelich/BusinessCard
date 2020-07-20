import { Component, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { slideInOutAnimation } from '@common/animations/slideInOutAnimation';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [slideInOutAnimation]
})
export class MenuComponent {
  public isScrollOnTop: boolean = true;
  public isMobileMenuVisible: boolean = false;

  constructor(
    @Inject('window') private window: Window) {
  }

  ngOnInit() {

  }

  @HostListener('window:scroll', ['$event'])
  public onScroll(): void {
    let num = this.window.pageYOffset;
    if (num > 100) {
      this.isScrollOnTop = false;
    }
    else {
      this.isScrollOnTop = true;
    }
  }

  public toggleMenu(): void {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }

}
