import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'app-markdown-modal',
  templateUrl: './markdown-modal.component.html',
  styleUrls: ['./markdown-modal.component.css']
})
export class MarkdownModalComponent implements OnChanges {
  @Input() markdownContent: string | Promise<string> = '';
  htmlContent: string = '';
  showModal: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['markdownContent']) {
      this.convertMarkdownToHtml(changes['markdownContent'].currentValue);
      console.log('Markdown content change detected');
    }
  }

  private async convertMarkdownToHtml(content: string | Promise<string>) {
    console.log('Markdown content convert');
    try {
      const markdownText = await Promise.resolve(content);
      console.log('Markdown Text:', markdownText); // Log the markdown content
      this.htmlContent = await marked(markdownText || '');
      this.showModal = true;
      this.cdr.detectChanges(); // Trigger change detection
    } catch (error) {
      console.error('Error converting Markdown to HTML:', error);
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
