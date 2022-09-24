import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { database } from 'src/app/app-config';
import { Member } from 'src/models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  tab :Member[]= database._db.members;
 constructor(private httpClient: HttpClient)
 {

 }
 saveMember(member:any):Promise<any>{
  //return this.httpClient.post<Member>("linktorestAPI", member.toPromise());
  const memberToSave={...member, 
    id:(Math.random()*10000).toString(),
    createdDate: new Date().toISOString(), //extraction de id et createdDate
  };
 
 }
}
