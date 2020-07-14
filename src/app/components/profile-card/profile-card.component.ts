import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  selectedFile: File;
  fileUrl: string | ArrayBuffer

  @Input() users;
  @Input() imgProfile;

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
  }

}
