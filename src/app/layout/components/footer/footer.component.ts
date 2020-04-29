import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.less"],
})
export class FooterComponent {
  public dataAboutUs = [
    {
      title: "Cncf.io",
      link: "https://www.cncf.io/",
    },
    {
      title: "Linux foundation",
      link: "https://www.linuxfoundation.org/",
    },
    {
      title: "Team",
      link: "https://www.cncf.io/",
    },
  ];

  public dataSocialMedia = [
    {
      title: "Facebook",
      link: "https://www.facebook.com/",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/",
    },
    {
      title: "Telegram",
      link: "https://telegram.org/",
    },
    {
      title: "YouTube",
      link: "https://www.youtube.com/",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/",
    },
    {
      title: "Twitter",
      link: "https://twitter.com/",
    },
  ];

  @Output() onScrollBtnClick: EventEmitter<void> = new EventEmitter<void>();
}
