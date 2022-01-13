import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "profile-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.css"],
})
export class ProfileResumeComponent implements OnInit {
  @Input() profile: any;

  constructor() {}

  ngOnInit(): void {}
}
