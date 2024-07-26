import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
    selector: 'app-product-page',
    // standalone: true,
    // imports: [
    //     CommonModule,
    // ],
    templateUrl: './productPage.component.html',
    styleUrl: './productPage.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageComponent implements OnInit {

    ngOnInit(): void { }

}
