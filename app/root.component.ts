import { Component } from "@angular/core"
import { Carousel } from "./carousel.component"

@Component({
    selector: "root",
    template: `
        <div>
            <carousel [photos]="photos"></carousel>
        </div>
    `,
    directives: [Carousel]
})
export class RootComponent {
    
    photos: Array<string> = []
    
    constructor() {
        this.photos = ["/photos/one.jpg", "/photos/two.jpg", "/photos/three.jpg"]
    }
}