import React, { useEffect } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { userSurveys } from "@sspaeshop/entry-service";
import { useHistory } from "react-router-dom";

export default function EntryRouter() {
  const history = useHistory();

  useEffect(() => {
    userSurveys.then(surveys => {
      if (surveys != null && surveys.length > 0) {
        history.push('/survey');
      } else {
        history.push('/products');
      }
    });
  }, []);

  return (
    <div>
      <p>routing...</p>
      <CircularProgress size={120} />
    </div>
    
  );
}
