import { Injectable } from '@angular/core';


@Injectable()
export class PortfolioService {

    public getPortfolioItemCollection(): PortfolioWorkModel[] {
        var result = new Array<PortfolioWorkModel>();

        let carneSimplifiWork = this.getCraneSimplifiWork();
        result.push(carneSimplifiWork);

        let imdadWork = this.getImdadWork();
        result.push(imdadWork);

        let stratasysWork = this.getStratasysWork();
        result.push(stratasysWork);

        let sdmWork = this.getSDMWork();
        result.push(sdmWork);

        return result;
    }

    private getCraneSimplifiWork(): PortfolioWorkModel {
        let carneSimplifi = new PortfolioWorkModel();
        carneSimplifi.mediaWorkCollection = [
            <MediaWorkItem>{
                imgSrc: "/dist/assets/img/portfolio/crane/simplifi_screens.png"
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

    private getImdadWork(): PortfolioWorkModel {
        let imdad = new PortfolioWorkModel();
        imdad.mediaWorkCollection = [
            <MediaWorkItem>{
                imgSrc: "/dist/assets/img/portfolio/imdad/home.jpg"
            },
            <MediaWorkItem>{
                imgSrc: "/dist/assets/img/portfolio/imdad/gallery.jpg"
            },
            <MediaWorkItem>{
                imgSrc: "/dist/assets/img/portfolio/imdad/product.jpg"
            },
            <MediaWorkItem>{
                imgSrc: "/dist/assets/img/portfolio/imdad/request.jpg"
            },
            <MediaWorkItem>{
                imgSrc: "/dist/assets/img/portfolio/imdad/roi.jpg"
            },

        ];
        imdad.title = "Imdad";
        imdad.description = "Aesthetic technologies & lasers distributor in middle east. Securing confidence in aesthetic medicine since 1991"
        imdad.tags = "ASP.net MVC, MS SQL, Sitecore, integration with Salesforce";

        return imdad;
    }

    private getStratasysWork(): PortfolioWorkModel {
        let stratasys = new PortfolioWorkModel();
        stratasys.mediaWorkCollection = [
            <MediaWorkItem>{
                imgSrc: "/dist/assets/img/portfolio/stratasys/home.jpg"
            },
            <MediaWorkItem>{
                imgSrc: "/dist/assets/img/portfolio/stratasys/explore.jpg"
            },
            <MediaWorkItem>{
                imgSrc: "/dist/assets/img/portfolio/stratasys/caseStudy.jpg"
            },
            <MediaWorkItem>{
                imgSrc: "/dist/assets/img/portfolio/stratasys/homeBottom.jpg"
            },
        ];
        stratasys.title = "Stratasys";
        stratasys.description = "Global leader in 3D printing and additive solutions"
        stratasys.tags = "ASP.net MVC, MS SQL, Sitecore";

        return stratasys;
    }

    private getSDMWork(): PortfolioWorkModel {
        let sdm = new PortfolioWorkModel();
        sdm.mediaWorkCollection = [
            <MediaWorkItem>{
                imgSrc: "/dist/assets/img/portfolio/stratasys/home.jpg"
            },
            <MediaWorkItem>{
                imgSrc: "/dist/assets/img/portfolio/stratasys/explore.jpg"
            },
            <MediaWorkItem>{
                imgSrc: "/dist/assets/img/portfolio/stratasys/caseStudy.jpg"
            },
            <MediaWorkItem>{
                imgSrc: "/dist/assets/img/portfolio/stratasys/homeBottom.jpg"
            },
        ];
        sdm.title = "Stratasys Direct";
        sdm.description = "Experience the future of manufacturing with custom 3D printing services by Stratasys Direct Manufacturings"
        sdm.tags = "ASP.net MVC, MS SQL, Sitecore";

        return sdm;
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
