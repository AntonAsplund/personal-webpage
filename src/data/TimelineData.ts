/**
 * Interface for the timeline component.
 */
 
export interface TimelineEntry {
  startDate: Date;
  endDate?: Date;
  present: boolean;
  role: string;
  organization: string;
  summary: string;
  tags: string[];
}

export const CareerTimelineData: TimelineEntry[] = [
  {
    startDate: new Date("2021-08-01"),
    present: true,
    role: "Full-stack Developer",
    organization: "Stena Line Scandinavia AB",
    summary:
      "Responsible for development, deployment, quality assurance, integration of custom components and underlying logic in Adobe Experience Manager Sites and Assets. Whilst maintaining the stability, reliability and performance of customer facing Stena Line sites.",
    tags: ["Adobe Experience Manager", "JAVA", "Javascript", "SCSS", "JCR", "Apache Sling"],
  },
  {
    startDate: new Date("2020-11-09"),
    endDate: new Date("2021-06-30"),
    present: false,
    role: "Front-end developer intern",
    organization: "Möteplatsen i Norden AB",
    summary:
      "Write and style front-end code in Ember.JS and on occasion ASP.NET through user stories and design sketches.",
    tags: ["Javascript", ".Net", "Ember.JS", "LESS"],
  },
  {
    startDate: new Date("2019-09-02"),
    endDate: new Date("2021-06-18"),
    present: false,
    role: "Student",
    organization: "Campus Varberg",
    summary:
      "Education towards becoming a developer within .NET, with the main focus towards front-end development.",
    tags: ["ASP .NET Core", "Blazor WebAssembly"],
  },
];