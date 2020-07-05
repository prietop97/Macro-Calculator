export interface UserStatsPost {
  goalId: number | null;
  genderId: number | null;
  activityFactorId: number | null;
  unitSystemId: number | null;
  height: number;
  weight: number;
  dateOfBirth: Date | null;
}

export interface UserStatsForm {
goalId: number | null;
  genderId: number | null;
  activityFactorId: number | null;
  unitSystemId: number | null;
  feets: number;
  inches: number;
  dateOfBirth: Date | null;
};
