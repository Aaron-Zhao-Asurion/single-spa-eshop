import { UserSurvey } from '../@types/user-survey';
import { BehaviorSubject } from "rxjs";

export async function shouldUserGetSurvey(fakeUserId: string | number): Promise<boolean> {
  fakeUserId = 1;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random() >= 0.5);
    }, 1000);
  });
}

export async function fetchUserSurveys(fakeUserId: string | number): Promise<UserSurvey[]> {
  if (await shouldUserGetSurvey(fakeUserId)) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          userId: 1,
          type: 'RECENT_CHECKOUT_EXP',
          questions: [
            'Tell us more about your recent checkout experience in our app.'
          ],
          dateCreated: new Date().toString(),
          dateUpdated: new Date().toString(),
          createdBy: 'aaronz',
          updatedBy: 'aaronz'
        }]);
      }, 2000);
    });
  } else {
    return null;
  }
}

const userID = 1;
export const userSurveys = fetchUserSurveys(userID).then(r => r);

