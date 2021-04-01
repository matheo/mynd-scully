import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Partner } from '../../../sanity';

@Component({
  selector: 'partners-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent implements OnInit {
  partner!: Partner;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.partner = data.partner;
    });
  }
}
