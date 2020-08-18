import { NgModule } from '@angular/core';
import { AngularEditorToolbarComponent } from './angular-editor-toolbar.component';
import { AeSelectComponent } from './ae-select/ae-select.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorComponent } from './angular-editor.component';
@NgModule({
  declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [AngularEditorComponent, AngularEditorComponent, AngularEditorToolbarComponent]
})
export class TextEditorModule { }
