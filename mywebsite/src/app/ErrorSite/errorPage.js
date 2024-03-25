import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  if(error){
    console.error(error);
  }

  return (
    <div id="error-page">
      <center>
        <h1>Oh!</h1>
        <p><strong>Sorry, we are working hard to develop this module.</strong></p>
        <br/>
        <p>
        <i>{error ? (error.statusText || error.message) : 'Some error'}</i>
        </p>
      </center>
    </div>
  );
}