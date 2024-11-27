import { desc } from "drizzle-orm";
import { db } from ".";
import { projects, skills } from "./schema";

export async function getProjects() {
  return await db.select().from(projects).orderBy(desc(projects.createdAt));
}

export async function getSkills() {
  return await db.select().from(skills);
}
