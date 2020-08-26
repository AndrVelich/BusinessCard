import { Injectable } from '@angular/core';


@Injectable()
export class PortfolioService {

    public getPortfolioItemCollection(): PortfolioWorkModel[] {
        var result = new Array<PortfolioWorkModel>();
        let carneSimplifiWork = this.getCraneSimplifiWork();
        result.push(carneSimplifiWork);

        return result;
    }

    private getCraneSimplifiWork(): PortfolioWorkModel {
        let carneSimplifi = new PortfolioWorkModel();
        carneSimplifi.mediaWorkCollection = [
            <MediaWorkItem>{
                imgSrc: "/dist/assets/img/portfolio/simplifi_screens.png"
            },
            <MediaWorkItem>{
                videoId: "9jCh0W8Xo8U"
            },
            
        ];
        carneSimplifi.title = "Crane Simplifi";
        carneSimplifi.description = "Vending business management system"
        carneSimplifi.tags = "MS SQL, ASP.net MVC, Angular";

        return carneSimplifi;
    }
}

export class PortfolioWorkModel {
    public mediaWorkCollection: MediaWorkItem[];
    public title: string;
    public description: string;
    public tags: string;
}

export class MediaWorkItem {
    public imgSrc: string;
    public videoId: string;
}
