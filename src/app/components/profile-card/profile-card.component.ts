import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  openSaveBtn:boolean =true;
  selectedFile: File;
  fileUrl: string | ArrayBuffer

  @Input() users;
  @Input() imgProfile;
  @Output() outputGetPost = new EventEmitter<void>();

  constructor(
    private userService:UserService,
  ) {
   }

  ngOnInit(): void {
  }

  
  selectFile(event) {
    if (event.target.files[0]) {
      this.selectedFile = event.target.files[0];
      
      const reader = new FileReader();
      
      reader.onload = e => {
        this.fileUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
  
  saveImg() {
    this.userService.saveImg(this.selectedFile)
    .subscribe(response => 
        this.userService.editUserImg({profileImg: response[0]},this.users.id)    
      )
      this.outputGetPost.emit();
      this.openSaveBtn = false;
  }

}
