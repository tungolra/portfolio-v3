import { projects } from "@/lib/data/seed";
import { skills } from "@/lib/data/seed";

// parse projects

export const featured = [];
projects.map((project) => {
  if (project.type === "project") {
    featured.push(project);
  }
  return featured;
});

export const preview = [];
projects.map((project) => {
  if (project.type === "preview") {
    preview.push(project);
  }
  return preview;
});

// parse skills
