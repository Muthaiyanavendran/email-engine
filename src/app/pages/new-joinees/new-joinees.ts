import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-joinees',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-joinees.html',
  styleUrls: ['./new-joinees.css']
})
export class NewJoineesComponent {
  // Page Control (Sidebar)
  selectedPage: string = 'new-joinees';

  selectPage(page: string): void {
    this.selectedPage = page;
  }

  // New Joinee Fields
  newJoinee: Record<string, string> = {
    name: '',
    role: '',
    qualification: '',
    previousCompany: '',
    group: '',
    location: '',
    associateId: '',
    skills: '',
    buddy: ''
  };

  // Dynamic field metadata for HTML loop
  joineeFields = [
    { id: 'name', label: 'Name', model: 'name' },
    { id: 'role', label: 'Role / Designation', model: 'role' },
    { id: 'qualification', label: 'Educational Qualification', model: 'qualification' },
    { id: 'previousCompany', label: 'Previous Company', model: 'previousCompany' },
    { id: 'group', label: 'Group', model: 'group' },
    { id: 'location', label: 'Location', model: 'location' },
    { id: 'associateId', label: 'Associate ID', model: 'associateId' },
    { id: 'skills', label: 'Skills', model: 'skills' },
    { id: 'buddy', label: 'Buddy', model: 'buddy' }
  ];

  // Upload preview and file type
  photoPreview: string | ArrayBuffer | null = null;
  uploadedIdPreview: string | ArrayBuffer | null = null;
  isPdf: boolean = false;

  // Handle photo upload
  onPhotoUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.photoPreview = reader.result);
      reader.readAsDataURL(file);
    }
  }

  // Handle ID upload (image or PDF)
  onIdUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.isPdf = file.type === 'application/pdf';
      const reader = new FileReader();
      reader.onload = () => (this.uploadedIdPreview = reader.result);
      reader.readAsDataURL(file);
    }
  }

  // Submit logic (expand later)
  addJoinee(): void {
    console.log('New Joinee:', this.newJoinee);
    alert('Joinee added successfully!');
    this.resetForm();
  }

  // Optional: Reset form after submit
  private resetForm(): void {
    for (const key in this.newJoinee) {
      if (this.newJoinee.hasOwnProperty(key)) {
        this.newJoinee[key] = '';
      }
    }
    this.photoPreview = null;
    this.uploadedIdPreview = null;
    this.isPdf = false;
  }
}
