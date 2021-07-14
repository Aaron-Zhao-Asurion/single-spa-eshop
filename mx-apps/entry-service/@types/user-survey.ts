export interface UserSurvey {
  userId: string | number;
  type: string;
  questions: string[];
  dateCreated: string;
  dateUpdated: string;
  createdBy: string;
  updatedBy: string;
}
