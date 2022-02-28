import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-matrix',
  templateUrl: './skill-matrix.component.html',
  styleUrls: ['./skill-matrix.component.css']
})
export class SkillMatrixComponent implements OnInit {
  select;
  frontend:boolean=false;
  chosenMod: string = "";
  saveUsername;

  constructor() { }

  ngOnInit(): void {
  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  
  closePopup() {
    this.displayStyle = "none";
  }

modo(){
  console.log("modo")
  switch(this.chosenMod) {  
     case "Frontend": { 
       console.log("Frontend");
       this.displayStyle = "block";
       this.select='Frontend';
       this.frontend=true;
        break;
     }
     case "Backend": { 
      console.log("Backend");
      
      this.select='Backend';
       break;
    }
  }
}

onSubmit()
  {
    this.checkCheckBoxvalue;
  }

  
  checkCheckBoxvalue(event){
      console.log(event.checked)
    }
  
  
}
