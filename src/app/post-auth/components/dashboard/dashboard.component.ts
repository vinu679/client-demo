import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataSource: any[] = [];
  data: any[] = [];
  subject: Subject<string> = new Subject();
  searchText: string = '';
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource = this.appService.tableRecords;
    this.data = this.dataSource;
    this.subject.pipe(debounceTime(1000)).subscribe(searchTerm => {
      this.dataSource = this.data.filter(x => x.name.toLowerCase().trim().includes(searchTerm.toLowerCase().trim()));
    })
  }

  logOut(): void {
    this.appService.clearAll();
    this.router.navigateByUrl('', {replaceUrl: true});
  }

  onChange(e: any): void {
    this.subject.next(this.searchText);
  }

}
