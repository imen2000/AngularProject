import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-members-from',
  templateUrl: './members-from.component.html',
  styleUrls: ['./members-from.component.css']
})
export class MembersFromComponent implements OnInit {
  form :any;
 
 
  constructor(private memberService:MemberService) { console.log("je suis dans constructeur");}

  ngOnInit(): void {  
    console.log("je suis dans init");    
    this.initForm();
  }



initForm():void{ // initialiser  le formulaire
  this.form = new FormGroup({
    cin: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    cv: new FormControl(null, Validators.required),
    type: new FormControl(null, Validators.required),
  });
}



ONSUB(): void{
  //récupération de l'élément
  console.log(this.form.value)
  const objectToSubmit=this.form.value; 
  //invocation de la méthode de service qui envoie http(post)
  this.memberService.saveMember(objectToSubmit).then(()=>{});
  
}
}
