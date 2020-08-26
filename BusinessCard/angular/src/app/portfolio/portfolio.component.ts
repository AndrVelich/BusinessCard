import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PortfolioItemComponent } from './portfolioItem/portfolioItem.component';
import { PortfolioService, PortfolioWorkModel } from '@services/portfolio.service';
import { fadeAnimation } from '@common/animations/fadeAnimation';

@Component({
    selector: 'portfolio-component',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    animations: [fadeAnimation]
})
export class PortfolioComponent {
    public portfolioWorkCollection: PortfolioWorkModel[];
    public isMouseover: boolean;

    constructor(
        public dialog: MatDialog,
        public portfolioService: PortfolioService
    ) {
        this.portfolioWorkCollection = portfolioService.getPortfolioItemCollection();
    }

    public openPortfolioPopup(portfolioWork: PortfolioWorkModel) {
        let dialogRef = this.dialog.open(PortfolioItemComponent, {
            data: portfolioWork
        });
    }

}
