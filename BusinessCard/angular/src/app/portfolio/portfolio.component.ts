import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PortfolioItemComponent, PortfolioWorkModel } from './portfolioItem/portfolioItem.component';
import { fadeAnimation } from '@common/animations/fadeAnimation';

@Component({
  selector: 'portfolio-component',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [fadeAnimation]
})
export class PortfolioComponent {
  public portfolioWork: PortfolioWorkModel;
  public isMouseover: boolean;

  constructor(
    public dialog: MatDialog) {
    this.portfolioWork = this.getPortfolioItem();
  }

  public openPortfolioPopup(portfolioWork: PortfolioWorkModel) {
    let dialogRef = this.dialog.open(PortfolioItemComponent, {
      data: portfolioWork
    });
  }

  //TODO get from server
  private getPortfolioItem(): PortfolioWorkModel {
    let portfolioWork = new PortfolioWorkModel();
    portfolioWork.imgSrcCollection = [
      "/dist/assets/img/portfolio/coffee.jpg",
      "/dist/assets/img/portfolio/console.jpg",
      "/dist/assets/img/portfolio/judah.jpg",
      "/dist/assets/img/portfolio/into-the-light.jpg"
    ];
    portfolioWork.title = "Coffee Cup";
    portfolioWork.description = "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit."
    portfolioWork.tags = "SQL, ASP.net core";
    return portfolioWork;
  }
}
