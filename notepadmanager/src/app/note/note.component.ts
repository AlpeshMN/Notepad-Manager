import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.less']
})
export class NoteComponent implements OnInit {
  notes: [];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getNotes();
  }

  //get notes from server
  getNotes() {
    this.noteService.getNotes()
    .subscribe(notes => this.notes = notes);
  }

  // add new note function
  addNote(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.noteService.addNote({ name } as note)
    .subscribe(note => this.notes.push(note));
  }
  //
  // //deleteNote function
  //  deleteNote(note): void {
  //    this.notes = this.notes.filter(n => n !== note);
  //    this.noteService.deleteNote(note);
  //  }
  //
  // //update save note function
  //  updateNote(note): void {
  //    this.noteService.updateNote(this.note);
  //  }
}
