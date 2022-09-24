import { GlobalPositionStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/services/member.service';
import { database } from '../app-config';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private MemberService : MemberService) {
    this.dataSource=this.MemberService.tab;
   }

  ngOnInit(): void {
  }
dataSource:Member[];


displayedColumns: string[] = ['id','cin', 'name', 'createDate', 'cv','type','icon'];





}
