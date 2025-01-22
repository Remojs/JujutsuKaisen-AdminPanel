enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
    CURSE = 'Curse',
    UNKNOWN = 'unknown',
  }
  
  export interface Affiliation {
    id: number;
    affiliationName: string;
    type: string;
    location: string;
    controlledBy: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface Occupation {
    id: number;
    occupationName: string;
    status: string;
    leader: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface Grade {
    id: number;
    gradeLevel: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface Character {
    id: number;
    name: string;
    alias: string | null;
    species: string;
    birthday: string;
    height: number;
    weight: number;
    age: number;
    gender: Gender;
    animeDebut: string;
    mangaDebut: string;
    affilation: Affiliation;
    occupation: Occupation;
    grade: Grade;
  }
  