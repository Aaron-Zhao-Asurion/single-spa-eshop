import React, { useState }  from "react";
import { userSurveys$ } from "@sspaeshop/entry-service";
import { useEffect } from "react";
import Button from "@material-ui/core/Button";

export default function Root(props) {
  const [survey, setSurvey] = useState(null);

  const surveyDone = () => {
    window.location.href = '../products';
  };

  useEffect(() => {
    const surveyUpdate = userSurveys$.subscribe(surveys => {
      if (surveys != null && surveys.length > 0) {
        setSurvey(surveys[0]);
      } else {
        surveyDone();
      }
    });

    return function cleanup() {
      surveyUpdate.unsubscribe();
    }
  });

  const title = props.name?.split('/')[1]?.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
  return (
    <div>
      <h1>{ title }</h1>
      <p>{ props.name } is mounted!</p>
      <h1>Survey</h1>
      <p>{ survey?.questions[0] }</p>
      <Button variant="contained" size="small" color="primary"
        onClick={surveyDone}>
        I'm Done
      </Button>
    </div>
  );
}
