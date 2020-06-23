import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent 
{
  @Input() button: string;
  @Input() callback: () => void;
  @Output() valueChanged = new EventEmitter<FormGroup>();
  form: FormGroup;

  constructor (private fb: FormBuilder) {}

  ngOnInit()
  {
    this.form = this.fb.group({
      address1: "",
      address2: "",
      city: "",
      email: "",
      name: "",
      phone: "",
      stateAbbrv: "",
      tableCount: "",
      timeZoneName: "",
      urbanization: "",
      zip4: "",
      zip5: ""
    });

    this.form.valueChanges.subscribe(value => {
      this.valueChanged.emit(this.form);
    })
  }
}