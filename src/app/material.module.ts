import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [ MatButtonModule, MatIconModule, MatCardModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDialogModule ],
    exports: [ MatButtonModule, MatIconModule, MatCardModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDialogModule ]
})

export class MaterialModule {}