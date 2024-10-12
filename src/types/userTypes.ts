export interface UserProfile {
  id: number;
  image: string;
  name: string;
  role: string;
  bio: string;
  contact: Socials;
}

export interface Socials {
  github: string;
  linkedin: string;
  instagram: string;
  twitter: string;
}

export interface UpdatedSocials {
  platform: "github" | "linkedin" | "instagram" | "twitter";
  svgPath: string;
  url: string;
}
