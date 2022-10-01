import { GlobalPositionStrategy } from '@angular/cdk/overlay';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/services/member.service';
import { database } from '../app-config';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private MemberService : MemberService,private router:Router) {
    this.dataSource=this.MemberService.tab;
   }

  ngOnInit(): void {
  }
dataSource:Member[];
fetchDataSource():void{
  this.MemberService.GetAllMembers().then((tableau)=>{this.dataSource=tableau})
}
delete(id:string):void{
  
  this.MemberService.deleteMember(id).then(()=>{this.fetchDataSource()}); /// madem bech yraja3li 7aja de type promise lezem na3mel then
}

displayedColumns: string[] = ['id','cin', 'name', 'createDate', 'cv','type','icon'];



}
