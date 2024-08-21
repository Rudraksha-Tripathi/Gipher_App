import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private routerService:RouterService) { }

  ngOnInit() {
  }
  routingToFacebook(){
    this.routerService.routeToFacebook();
  }
}
