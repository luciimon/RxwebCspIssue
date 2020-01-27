import { Component } from '@angular/core';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxweb-csp-issue';

  // application form
  applicationForm = this.fb.group({
    name: ['', [RxwebValidators.required(), RxwebValidators.minLength({ value: 2 }), RxwebValidators.maxLength({ value: 25 })]],
    message: ['', RxwebValidators.maxLength({ value: 255 })],
    amount: ['', [RxwebValidators.required(), RxwebValidators.minNumber({ value: 1 }), RxwebValidators.maxNumber({ value: 99999 })]]
  });

  constructor(private fb: RxFormBuilder) { }
}
