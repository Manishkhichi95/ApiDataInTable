import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestService } from '../service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css'],
})
export class ViewuserComponent implements OnInit {
  userdata: any;
  @Output() show = new EventEmitter();

  constructor(private users: TestService,private routes: Router, private route: ActivatedRoute) {
    
    this.route.queryParamMap.subscribe((res: any) => {console.log(res)
    this.userdata = res.params;

    })
  }

  ngOnInit(): void {
    console.log(this.userdata);
  }
  Back() {
    this.routes.navigate(['']);
  }
}
