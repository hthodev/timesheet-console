import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  protected isCollapsible: boolean[] = [];
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const coll = this.el.nativeElement.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
      this.isCollapsible.push(false);

      this.renderer.listen(coll[i], "click", () => {
        for (let j = 0; j < coll.length; j++) {
          if (j !== i) {
            coll[j].classList.remove("active");
            const content = coll[j].nextElementSibling;
            this.renderer.setStyle(content, "display", "none");
            this.isCollapsible[j] = false;
          }
        }

        coll[i].classList.toggle("active");
        const content = coll[i].nextElementSibling;

        if (content.style.display === "block") {
          this.renderer.setStyle(content, "display", "none");
          this.isCollapsible[i] = false;
        } else {
          this.renderer.setStyle(content, "display", "block");
          this.isCollapsible[i] = true;
        }
      });
    }
  }
}
