import { Component, Input } from '@angular/core';

@Component({
  selector: 'ordyx-divider',
  templateUrl: './ordyxDivider.component.html',
  styleUrls: ['./ordyxDivider.component.scss']
})
export class OrdyxDividerComponent {
  @Input() inset;
}