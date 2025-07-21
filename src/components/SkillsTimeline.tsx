import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, BriefcaseIcon, GraduationCapIcon } from "lucide-react";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    proficiency: number;
  }[];
}

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description?: string;
  type: "education" | "experience";
  link?: string;
}

interface SkillsTimelineProps {
  skillCategories?: SkillCategory[];
  timelineItems?: TimelineItem[];
}

const SkillsTimeline = ({
  skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", proficiency: 85 },
        { name: "JavaScript", proficiency: 90 },
        { name: "TypeScript", proficiency: 80 },
        { name: "HTML5", proficiency: 95 },
        { name: "CSS3", proficiency: 85 },
      ],
    },
    {
      name: "Technologies & Frameworks",
      skills: [
        { name: "React", proficiency: 90 },
        { name: "Vite", proficiency: 85 },
        { name: "MongoDB", proficiency: 75 },
        { name: "REST APIs", proficiency: 80 },
        { name: "Tailwind CSS", proficiency: 90 },
        { name: "Git", proficiency: 85 },
        { name: "CIVIC Authentication", proficiency: 70 },
      ],
    },
    {
      name: "Tools & Platforms",
      skills: [
        { name: "VS Code", proficiency: 95 },
        { name: "Postman", proficiency: 85 },
        { name: "GitHub", proficiency: 90 },
        { name: "Figma", proficiency: 80 },
        { name: "Canva", proficiency: 85 },
        { name: "Netlify", proficiency: 80 },
      ],
    },
  ],
  timelineItems = [
    {
      title: "Frontend Developer Intern",
      organization: "Entrepreneurs Woods",
      period: "Jul 2024 - Oct 2024",
      description:
        "Developed and maintained frontend components for a media-tech web application using modern web technologies. Collaborated with the startup team in a fast-paced environment, contributing to UI/UX improvements and ensuring responsive design.",
      type: "experience",
      link: "https://www.linkedin.com/company/entrepreneurswoods/posts/?feedView=all",
    },
    {
      title: "Head of Photography & Video Editing",
      organization: "Entrepreneurs Woods Startup",
      period: "Apr 2023 - Feb 2024",
      description:
        "Led photography and video editing initiatives for the startup, creating visual content for marketing and promotional materials.",
      type: "experience",
    },
    {
      title: "Team Lead - Skit Production",
      organization: "College Fest",
      period: "Mar 2024",
      description:
        "Led event coordination and skit production for college festival activities.",
      type: "experience",
      link: "https://drive.google.com/file/d/1BhFvSRLhTkj7ne7s8KsV2uyf266VmSJV/view",
    },
    {
      title: "B.Tech in Computer Science Engineering",
      organization: "Lakshmi Narain College of Technology, Bhopal",
      period: "2022 - 2026 (Expected)",
      description: "CGPA: 6.91/10",
      type: "education",
    },
    {
      title: "Senior Secondary Education",
      organization: "Central Board of Secondary Education",
      period: "2022",
      description: "Percentage: 70%",
      type: "education",
    },
    {
      title: "Secondary Education",
      organization: "Central Board of Secondary Education",
      period: "2020",
      description: "Percentage: 82.80%",
      type: "education",
    },
  ],
}: SkillsTimelineProps) => {
  return (
    <div className="w-full bg-background text-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Skills</h2>
            <div className="space-y-10">
              {skillCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.proficiency}%
                          </span>
                        </div>
                        <Progress value={skill.proficiency} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Certifications
              </h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col space-y-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold">AWS Academy Graduate</h4>
                        <Badge variant="outline">July 2025</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        AWS Academy Cloud Foundations
                      </p>
                      <a
                        href="https://www.credly.com/badges/210bc8cc-8f3f-4c84-84f7-4d829fae0f9d/public_url"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline mt-1"
                      >
                        View Certificate
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col space-y-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold">
                          Python Fundamentals and Programming
                        </h4>
                        <Badge variant="outline">Nov 2024 - Feb 2025</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Onwingspan (Parts 1-2)
                      </p>
                      <a
                        href="https://drive.google.com/drive/folders/1vDpFXWH7jCc5DVuLJhW8VBZeHxEphC1F?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline mt-1"
                      >
                        View Certificate
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">
              Experience & Education
            </h2>
            <div className="relative border-l border-border pl-6 space-y-8">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[25px] p-1 rounded-full bg-primary">
                    {item.type === "education" ? (
                      <GraduationCapIcon className="h-4 w-4 text-primary-foreground" />
                    ) : (
                      <BriefcaseIcon className="h-4 w-4 text-primary-foreground" />
                    )}
                  </div>

                  <Card className="overflow-hidden">
                    <CardContent className="p-5">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-lg">{item.title}</h3>
                          <Badge
                            variant={
                              item.type === "education"
                                ? "secondary"
                                : "default"
                            }
                          >
                            {item.type === "education"
                              ? "Education"
                              : "Experience"}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground">
                          {item.organization}
                        </p>

                        <div className="flex items-center text-sm text-muted-foreground">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          <span>{item.period}</span>
                        </div>

                        {item.description && (
                          <>
                            <Separator className="my-2" />
                            <p className="text-sm">{item.description}</p>
                          </>
                        )}

                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                          >
                            View Details
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsTimeline;
