import { Component } from "@angular/core";

@Component({
  selector: "app-partner-list",
  templateUrl: "./partner-list.component.html",
  styleUrls: ["./partner-list.component.less"],
})
export class PartnerListComponent {
  public partnerList = [
    {
      logo: "/assets/images/amazon-logo.png",
      link: "https://aws.amazon.com/training/",
    },
    {
      logo: "/assets/images/amazon-logo.png",
      link: "https://aws.amazon.com/training/",
    },
    {
      logo: "/assets/images/amazon-logo.png",
      link: "https://aws.amazon.com/training/",
    },
    {
      logo: "/assets/images/amazon-logo.png",
      link: "https://aws.amazon.com/training/",
    },
    {
      logo: "/assets/images/amazon-logo.png",
      link: "https://aws.amazon.com/training/",
    },
    {
      logo: "/assets/images/amazon-logo.png",
      link: "https://aws.amazon.com/training/",
    },
  ];
}
