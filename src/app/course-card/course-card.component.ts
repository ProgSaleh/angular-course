import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ContentChild,
  ContentChildren,
  AfterContentInit,
  ElementRef,
  QueryList,
  TemplateRef,
} from "@angular/core";
import { Course } from "../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent
  implements OnInit, AfterViewInit, AfterContentInit
{
  @Input()
  course: Course;

  @Input()
  noImageTpl: TemplateRef<any>;

  @Input()
  cardIndex: number;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  // @ContentChild(CourseImageComponent, { read: ElementRef })
  // image;

  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images: QueryList<Course>;

  constructor() {}

  ngAfterViewInit() {}

  ngAfterContentInit() {
    console.log(this.images);
  }

  ngOnInit(): void {}

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category === "BEGINNER") {
      return "beginner";
    }
  }

  cardStyles() {
    return { "background-image": "url(" + this.course.iconUrl + ")" };
  }
}
