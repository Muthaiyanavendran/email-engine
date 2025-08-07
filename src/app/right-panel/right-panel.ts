import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-right-panel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './right-panel.html',
  styleUrls: ['./right-panel.css']
})
export class RightPanel {
  newJoinee = {
    educationalQualifications: '',
    previousCompany: '',
    group: '',
    location: '',
    associateId: '',
    skills: '',
    buddy: '',
    buddyLocation: '',
    photo: ''
  };

  onPhotoUpload(event: any): void {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.newJoinee.photo = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}

}
