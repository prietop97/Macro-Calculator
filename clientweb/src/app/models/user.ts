export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  registrationCompleted: boolean;
  token: string;
}

export interface IUserFormValuesLogin {
  email: string;
  password: string;
}

export interface IUserFormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface IUserStatsFormPost {
  goalId: number | null;
  genderId: number | null;
  activityFactorId: number | null;
  unitSystemId: number | null;
  height: number;
  weight: number;
  dateOfBirth: Date;
}

export interface IUserStatsDropDowns {
  activitiesFactors: DropDowns[];
  genders: DropDowns[];
  goals: DropDowns[];
  unitSystems: DropDowns[];
}

export interface IUserStats {
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
