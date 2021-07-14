declare module "@sspaeshop/entry-service" {
  export const userSurveys$: any;
  export const fetchUserSurveys: (fakeUserId: string | number) => Promise<any[]>
}

