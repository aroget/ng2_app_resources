import {
  OnInit,
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Output,
  Input,
  EventEmitter,
  OnDestroy
} from '@angular/core';

import './ckeditor.loader';
declare var CKEDITOR: any;

@Component({
  selector: 'qa-ckeditor-input',
  template: `<input #ckeditor>`
})
export class CkeditorComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() text: string;
  @ViewChild('ckeditor') 'ckeditor': ElementRef;
  @Output() inputChanged: EventEmitter<any> = new EventEmitter();

  editorName;
  isSet = false;

  constructor() { }

   ngAfterViewInit() {
     const element = new CKEDITOR.dom.element(this.ckeditor.nativeElement);
     const widget = CKEDITOR.replace(element);
     this.editorName = element.getEditor().name;

     widget.on('loaded', () => {
      CKEDITOR.instances[this.editorName].on('dataReady', data => {
        if (!this.isSet && this.text) {
          data.editor.setData(this.text, function() {
            data.editor.checkDirty();
          });
        }
      });

      CKEDITOR.instances[this.editorName].on('afterSetData', () => this.isSet = true);

      CKEDITOR.instances[this.editorName].on('change', data => {
        this.inputChanged.emit(CKEDITOR.instances[this.editorName].getData());
      });
     });
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.isSet = false;
    CKEDITOR.instances[this.editorName].destroy();
  }
}
