import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestService } from '../service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css'],
})
export class ViewuserComponent implements OnInit {
  userdata: any = {};
  id: number = 0;
  page: number = 0;
  constructor(private users: TestService, private routes: Router, private route: ActivatedRoute, private http: HttpClient) {

    this.route.queryParamMap.subscribe((res: any) => {
      console.log(res)
      this.id = res.params.id;
      this.page = res.params.page;
    })
  }

  ngOnInit(): void {
    this.http.get('https://reqres.in/api/users?page=' + this.page).subscribe((res: any) => {
      console.log("response", res)
      res.data.forEach((element: any) => {
        console.log("elem ID", element)
        if (element.id == this.id && res.page == this.page) {
          this.userdata = element
          console.log("userdata", this.userdata)
        }
      })
    })
  }

  Back() {
    this.routes.navigate(['']);
  }
}
