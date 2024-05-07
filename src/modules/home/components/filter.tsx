import { InputField } from "@modules/common/input";
import { SelectField } from "@modules/common/select";
import { Grid } from "@mui/material";
import { Control, FieldValues, UseFormWatch } from "react-hook-form";

interface FilterProps {
  control: Control;
  watch: UseFormWatch<FieldValues>;
}

export function Filter({ control, watch }: FilterProps) {
  return (
    <Grid
      container
      spacing={0.5}
      py={4}
      display="flex"
      alignItems="center"
      textAlign="start"
      fontWeight={300}
      flexWrap="wrap"
    >
      <Grid item xs={12} sm={6} md="auto" lg="auto">
        <SelectField
          name="roles"
          title="Roles"
          data={selectFieldData.roles}
          control={control}
          required={false}
          fontWeight={400}
          disable={false}
          sendId={false}
          placeholder="Roles"
          fontSize={12}
          isMulti={true}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md="auto"
        lg="auto"
      >
        <SelectField
          name="companySize"
          title="No of Employees"
          placeholder="No of Employees"
          data={selectFieldData.companySize}
          control={control}
          required={false}
          fontWeight={400}
          disable={false}
          sendId={false}
          fontSize={12}
          isMulti={true}
        />
      </Grid>
      <Grid item xs={12} sm={6} md="auto" lg="auto">
        <SelectField
          name="experience"
          title="Experience"
          data={selectFieldData.experience}
          control={control}
          required={false}
          fontWeight={400}
          disable={false}
          sendId={false}
          placeholder="Experience"
          fontSize={12}
        />
      </Grid>
      <Grid item xs={12} sm={6} md="auto" lg="auto">
        <SelectField
          name="remote"
          title="Remote"
          data={selectFieldData.remote}
          control={control}
          required={false}
          fontWeight={400}
          disable={false}
          sendId={false}
          placeholder="Remote"
          fontSize={12}
          isMulti={true}
        />
      </Grid>
      <Grid item xs={12} sm={6} md="auto" lg="auto">
        <SelectField
          name="techStack"
          title="Tech Stack"
          data={selectFieldData.techStack}
          control={control}
          required={false}
          fontWeight={400}
          disable={false}
          sendId={false}
          placeholder="Tech Stack"
          fontSize={12}
        />
      </Grid>
      <Grid item xs={12} sm={6} md="auto" lg="auto">
        <SelectField
          name="minBasePay"
          title="Min Base Pay"
          data={selectFieldData.minBasePay}
          control={control}
          required={false}
          fontWeight={400}
          disable={false}
          sendId={false}
          placeholder="Minimum Base Pay Salary"
          fontSize={12}
        />
      </Grid>
      <Grid item xs={12} sm={6} md="auto" lg="auto">
        <InputField
          name="companyName"
          label="Company Name"
          type="text"
          control={control}
          placeholder="Search company name"
        />
      </Grid>
    </Grid>
  );
}

const selectFieldData = {
  remote: [
    { value: "remote", label: "Remote" },
    { value: "hybrid", label: "Hybrid" },
    { value: "in office", label: "In Office" },
  ],
  minBasePay: [
    { value: "0", label: "0L" },
    { value: "10", label: "10L" },
    { value: "20", label: "20L" },
    { value: "30", label: "30L" },
    { value: "40", label: "40L" },
    { value: "50", label: "50L" },
    { value: "60", label: "60L" },
    { value: "70", label: "70L" },
  ],
  techStack: [
    { value: "react", label: "React" },
    { value: "angular", label: "Angular" },
    { value: "vue", label: "Vue" },
    { value: "node", label: "Node" },
    { value: "express", label: "Express" },
    { value: "mongo", label: "Mongo" },
    { value: "sql", label: "SQL" },
    { value: "java", label: "Java" },
    { value: "python", label: "Python" },
    { value: "c++", label: "C++" },
    { value: "c#", label: "C#" },
    { value: "ruby", label: "Ruby" },
    { value: "php", label: "PHP" },
    { value: "laravel", label: "Laravel" },
    { value: "django", label: "Django" },
    { value: "flask", label: "Flask" },
    { value: "spring", label: "Spring" },
    { value: "ruby on rails", label: "Ruby on Rails" },
    { value: "go", label: "Go" },
    { value: "rust", label: "Rust" },
    { value: "scala", label: "Scala" },
    { value: "kotlin", label: "Kotlin" },
    { value: "swift", label: "Swift" },
    { value: "flutter", label: "Flutter" },
    { value: "react native", label: "React Native" },
    { value: "ionic", label: "Ionic" },
    { value: "xamarin", label: "Xamarin" },
    { value: "unity", label: "Unity" },
    { value: "unreal", label: "Unreal" },
    { value: "docker", label: "Docker" },
    { value: "kubernetes", label: "Kubernetes" },
    { value: "jenkins", label: "Jenkins" },
    { value: "git", label: "Git" },
    { value: "github", label: "Github" },
    { value: "gitlab", label: "Gitlab" },
    { value: "bitbucket", label: "Bitbucket" },
    { value: "aws", label: "AWS" },
    { value: "azure", label: "Azure" },
    { value: "gcp", label: "GCP" },
    { value: "firebase", label: "Firebase" },
    { value: "heroku", label: "Heroku" },
    { value: "netlify", label: "Netlify" },
    { value: "vercel", label: "Vercel" },
    { value: "digital ocean", label: "Digital Ocean" },
    { value: "cloudflare", label: "Cloudflare" },
    { value: "nginx", label: "Nginx" },
    { value: "apache", label: "Apache" },
  ],
  experience: [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ],
  companySize: [
    { value: "1-10", label: "1-10" },
    { value: "21-50", label: "21-50" },
    { value: "51-100", label: "51-100" },
    { value: "101-200", label: "101-200" },
    { value: "201-500", label: "201-500" },
  ],

  roles: [
    {
      label: "ENGINEERING",
      options: [
        { value: "frontend", label: "Frontend" },
        { value: "backend", label: "Backend" },
        { value: "fullstack", label: "Fullstack" },
        { value: "ios", label: "IOS" },
        { value: "devops", label: "DevOps" },
        { value: "qa", label: "QA" },
        { value: "mobile", label: "Mobile" },
        { value: "data", label: "Data" },
        { value: "security", label: "Security" },
        { value: "blockchain", label: "Blockchain" },
        { value: "game", label: "Game" },
        { value: "embedded", label: "Embedded" },
        { value: "iot", label: "IoT" },
        { value: "ar/vr", label: "AR/VR" },
        { value: "machine learning", label: "Machine Learning" },
        {
          value: "artificial intelligence",
          label: "Artificial Intelligence",
        },
        { value: "cloud", label: "Cloud" },
        { value: "big data", label: "Big Data" },
        { value: "cyber security", label: "Cyber Security" },
        { value: "networking", label: "Networking" },
        { value: "web", label: "Web" },
      ],
    },
    {
      label: "DESIGN",
      options: [
        { value: "desuigner", label: "Designer" },
        { value: "product designer", label: "Product Designer" },
        { value: "ux/ui designer", label: "UX/UI Designer" },
        { value: "graphic designer", label: "Graphic Designer" },
        { value: "web designer", label: "Web Designer" },
        { value: "illustrator", label: "Illustrator" },
        { value: "motion designer", label: "Motion Designer" },
        { value: "3d designer", label: "3D Designer" },
      ],
    },
    {
      label: "PRODUCT",
      options: [
        { value: "product manager", label: "Product Manager" },
        { value: "product owner", label: "Product Owner" },
        { value: "product analyst", label: "Product Analyst" },
        { value: "product marketer", label: "Product Marketer" },
        { value: "product engineer", label: "Product Engineer" },
      ],
    },
    {
      label: "OPERATIONS",
      options: [
        { value: "operations manager", label: "Operations Manager" },
        { value: "founder/COS", label: "Founder / Chief of Staff" },
      ],
    },
    {
      label: "SALES",
      options: [
        { value: "sales", label: "Sales" },
        { value: "marketing", label: "Marketing" },
        {
          value: "business development",
          label: "Business Development",
        },
      ],
    },
    {
      label: "SUPPORT",
      options: [
        { value: "customer support", label: "Customer Support" },
        { value: "technical support", label: "Technical Support" },
      ],
    },
  ],
};
