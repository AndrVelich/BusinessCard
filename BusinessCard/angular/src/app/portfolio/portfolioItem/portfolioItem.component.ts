import {
  Component,
  Inject,
  OnDestroy,
  Renderer2,

  ElementRef, Input, Output, EventEmitter, HostListener

} from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { fadeAnimation } from '@common/animations/fadeAnimation';

@Component({
  selector: 'portfolioItem-component',
  templateUrl: './portfolioItem.component.html',
  styleUrls: ['./portfolioItem.component.scss'],
  animations: [fadeAnimation]
})
export class PortfolioItemComponent {
  private index: number;

  constructor(
    public dialogRef: MatDialogRef<PortfolioItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PortfolioWorkModel
  )
  {
  }

  ngOnInit() {
    this.index = 0;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == 'ArrowRight') {
      this.toNext()
    }
    if (event.key == 'ArrowLeft') {
      this.toPrevious()
    }
  }

  public toPrevious(): void {
    if (this.isPreviousAvailable()) {
      --this.index;
    }
  }

  public toNext(): void {
    if (this.isNextAvailable()) {
      ++this.index;
    }
    else {
      this.index = 0;
    }
  }

  public isNextAvailable(): boolean {
    var result = this.index < this.data.imgSrcCollection.length - 1;
    return result;
  }

  public isPreviousAvailable(): boolean {
    var result = this.index > 0;
    return result;
  }

  public getImagePath(): string {
    var result = this.data.imgSrcCollection[this.index];
    return result;
  }

  public close(): void {
    this.dialogRef.close();
  }

  public trackBy(index, item) {
    return item;
  }
}

export class PortfolioWorkModel {
  public imgSrcCollection: string[];
  public title: string;
  public description: string;
  public tags: string;
}
