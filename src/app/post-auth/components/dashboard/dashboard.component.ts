import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataSource: any[] = [];
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource = this.appService.tableRecords;
  }

  logOut(): void {
    this.appService.clearAll();
    this.router.navigateByUrl('', {replaceUrl: true});
  }

}
