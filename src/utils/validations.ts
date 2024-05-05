import { z } from "zod";

const FilterSchema = z.object({
  roles: z.array(z.string()).optional(),
  companySize: z.number().optional(),
  experience: z.number().optional(),
  workMode: z.string().optional(),
  techStack: z.array(z.string()).optional(),
  minSalary: z.number().optional(),
  companyName: z.string().optional(),
});

export { FilterSchema };
