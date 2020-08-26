import {
    Component,
    Inject,
    OnDestroy,
    Renderer2,

    ElementRef, Input, Output, EventEmitter, HostListener

} from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { fadeAnimation } from '@common/animations/fadeAnimation';
import { PortfolioWorkModel, MediaWorkItem } from '@services/portfolio.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
    selector: 'portfolioItem-component',
    templateUrl: './portfolioItem.component.html',
    styleUrls: ['./portfolioItem.component.scss'],
    animations: [fadeAnimation]
})
export class PortfolioItemComponent {
    private index: number;

    constructor(
        private sanitizer: DomSanitizer,
        public dialogRef: MatDialogRef<PortfolioItemComponent>,
        @Inject(MAT_DIALOG_DATA) public data: PortfolioWorkModel
    ) {
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
        var result = this.index < this.data.mediaWorkCollection.length - 1;
        return result;
    }

    public isPreviousAvailable(): boolean {
        var result = this.index > 0;
        return result;
    }

    public getImagePath(): string {
        let mediaWork = this.data.mediaWorkCollection[this.index];
        let result = mediaWork.imgSrc;

        return result;
    }

    public getVideoId(): string {
        let mediaWork = this.data.mediaWorkCollection[this.index];
        let result = mediaWork.videoId;

        return result;
    }

    public getSafeVideoUrl(): SafeResourceUrl {
        let videoId = this.getVideoId();
        let url = 'https://www.youtube.com/embed/' + videoId;
        let result = this.getSafeUrl(url);

        return result;
    }

    

    public close(): void {
        this.dialogRef.close();
    }

    public trackBy(index, item) {
        return item;
    }

    private getSafeUrl(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }
}
