import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    private fb = inject( FormBuilder);
    // constructor( private fb: FormBuilder) {}

    public color: string = 'green';

    public myForm: FormGroup = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(6), Validators.email ]]
    });

    changeColor() {
      const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
      this.color = color;
    }

    ngOnInit(): void { }

}
