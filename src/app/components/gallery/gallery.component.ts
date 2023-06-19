import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit
{
  images!: GalleryItem[];

  ngOnInit()
  {
    // Set items array
    this.images = [
      new ImageItem({ src: '/assets/dora/art1.jpg' }),
      new ImageItem({ src: '/assets/dora/art2.jpg' }),
      new ImageItem({ src: '/assets/dora/art3.jpg' }),
      new ImageItem({ src: '/assets/dora/art4.jpg' }),
      new ImageItem({ src: '/assets/dora/art5.jpg' }),
      // ... more items
    ];
  }
}
