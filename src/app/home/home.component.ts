import { Component, OnInit } from '@angular/core';
import { TestService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Table';
  userdata: any;
  userdatas: any;
  i: number = 1;
  e: any;
  filterdata: any;
  id: any;
  show: boolean = true;
  person: any;
  filterele: any;
  personDetails: any;
  constructor(private users: TestService, private route: Router) {
    this.users.getdata(this.i).subscribe((res) => {
      this.userdata = res;
      this.userdatas = this.userdata.data;
      // console.log(this.userdatas);
    });
  }
  refresh() {
    location.reload();
  }
  next() {
    if (this.i >= this.userdata.total_pages) {
      this.i = 0;
    }
    this.i++;
    this.users.getdata(this.i).subscribe((res: any) => {
      this.userdata = res;
      this.userdatas = this.userdata.data;
      // console.log(this.userdata);
    });
  }
  pre() {
    this.i--;
    // console.log(this.i);
    if (this.i == 0) {
      this.i = this.userdata.total_pages;
    }
    this.users.getdata(this.i).subscribe((res: any) => {
      this.userdata = res;
      this.userdatas = this.userdata.data;
      // console.log(this.userdata);
    });
  }
  getSearchVal(e: any) {
    // console.log(e.target.value);
    // console.log(this.userdatas)\
    let eValue = e.target.value.toUpperCase();
    if (e.target.value !== '') {
      let user = this.userdatas
        .filter((ele: any) => ele.first_name.toUpperCase().startsWith(eValue))
        .map((res: any) => res);
      // console.log("USER",user)
      this.userdatas = [];
      this.userdatas = user;
    } else {
      this.userdatas = this.userdata.data;
    }
  }
  aTozSort() {
    var sorted = function compare(
      a: { first_name: any },
      b: { first_name: any }
    ) {
      if (a.first_name < b.first_name) {
        return -1;
      }
      if (a.first_name > b.first_name) {
        return 1;
      }
      return 0;
    };
    this.userdatas.sort(sorted);
    console.log(this.userdatas);
  }
  zToaSort() {
    var sorted = function compare(
      a: { first_name: any },
      b: { first_name: any }
    ) {
      if (b.first_name < a.first_name) {
        return -1;
      }
      if (b.first_name > a.first_name) {
        return 1;
      }
      return 0;
    };
    console.log(this.userdatas);
    this.userdatas.sort(sorted);
  }
  // id sorting
  forwardIdSort() {
    var sorted = function compare(a: { id: any }, b: { id: any }) {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    };
    this.userdatas.sort(sorted);
    console.log(this.userdatas);
  }
  reverseIdSort() {
    var sorted = function compare(a: { id: any }, b: { id: any }) {
      if (b.id < a.id) {
        return -1;
      }
      if (b.id > a.id) {
        return 1;
      }
      return 0;
    };
    console.log(this.userdatas);
    this.userdatas.sort(sorted);
  }
  // viewuser
  viewuser(_person: any) {
    this.personDetails=_person
    console.log("User Details",this.personDetails)
    this.route.navigate(['viewUser'],{
      queryParams:{
          id:this.personDetails.id,
          FirstName:this.personDetails.first_name,
          LastName:this.personDetails.last_name,
          Email:this.personDetails.email,
          Avatar:this.personDetails.avatar
      }
    })
  }
  ngOnInit(): void {}
}
