import { Component, Input, OnChanges, ElementRef } from "@angular/core"
import { lory, Lory } from "lory"

@Component({
    selector: "carousel",
    template: `
        <div class="slider js_slider">
            <div class="frame js_frame">
                <ul class="slides js_slides">
                    <li class="js_slide" *ngFor="let photo of photos">
                        <img [src]="photo">
                    </li>
                </ul>
            </div>
        </div>
        <button (click)="prev()">Previous</button>
        <button (click)="next()">Next</button>
    `,
    styles: [
        `.frame {
            width: 500px;
            position: relative;
            font-size: 0;
            line-height: 0;
            overflow: hidden;
            white-space: nowrap;
        }`,
        `.slides {
            display: inline-block;
        }`,
        `.slides li {
            position: relative;
            display: inline-block;
            width: 500px;
        }`,
        `.slides li img {
            width: 100%;
        }`
    ]
})
export class Carousel implements OnChanges {
    
    @Input()
    photos: Array<string>
    
    private lory : Lory
    
    constructor(private el: ElementRef) {}
    
    ngOnChanges(changes) {
        if (changes.photos) {
            if (this.lory) {
                this.lory.destroy()
            }
            setTimeout(() => this.lory = lory(this.el.nativeElement))
        }
    }
    
    next() : void {
        this.lory.next()
    }
    
    prev() : void {
        this.lory.prev()
    }
}