import {Fragment} from 'react'
export default function Index() {
  return (
    <Fragment>
    <p>
      To test the CORS route, open the console in a new tab on a different
      domain and make a POST / GET / OPTIONS request to <b>/api/cors</b>. Using
      a different method from those mentioned will be blocked by CORS
    </p>
    <p>fetch('https://api-routes-cors-green-iota.vercel.app/api/cors', {method: "PATCH"})
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
          });
  </p>
  </Fragment>
  )
}
