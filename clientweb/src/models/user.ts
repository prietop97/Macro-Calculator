export interface UserI {
  firstName: string;
  lastName: string;
  email: string;
  registrationCompleted: boolean;
  token: string;
}

export interface UserFormValuesLogin {
  email: string;
  password: string;
}

export interface UserFormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserStatsFormPost {
  goalId: number | null;
  genderId: number | null;
  activityFactorId: number | null;
  unitSystemId: number | null;
  height: number;
  weight: number | number[];
  dateOfBirth: Date | null;
}

export interface UserStatsDropDowns {
  activitiesFactors: DropDowns[];
  genders: DropDowns[];
  goals: DropDowns[];
  unitSystems: DropDowns[];
}

export interface UserStats {
  goal: DropDowns;
  gender: DropDowns;
  activityFactor: DropDowns;
  unitSystemId: DropDowns;
  height: number;
  weight: number;
  fatGrams: number;
  proteinGrams: number;
  carbsGrams: number;
}

export interface DropDowns {
  id: number;
  description: string;
}
