import { BehaviorSubject } from "rxjs";

export async function shouldUserGetSurvey(fakeUserId) {
  fakeUserId = 1;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random() >= 0.5);
    }, 1000);
  });
}

export async function fetchUserSurveys(fakeUserId) {
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

export const userSurveys$ = new BehaviorSubject([]);

