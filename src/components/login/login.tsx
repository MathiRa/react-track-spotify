import querystring from "querystring";
import logo from './img/spoty.png';
import { Button, Grid, Paper } from "@mui/material";

export default function Login() {
  var queryParameters = querystring.stringify({
    response_type: "code",
    client_id: process.env.REACT_APP_CLIENT,
    scope: process.env.REACT_APP_SCOPE_SPOTIFY,
    redirect_uri: process.env.REACT_APP_REDIRECT_URI,
    state: process.env.REACT_APP_STATE
  });
 const urlLogin= process.env.REACT_APP_LOGIN_SPOTIFY||'';
  return (
    <>
      <div style={{ padding: 30 }}>
        <Paper>
          <img style={{ padding: 30, margin:'0 auto', display: 'table' }} src={logo} alt="Logo" />
          <Grid item xs={6} style={{ padding: 30, margin:'0 auto', display: 'table' }}>
            <Button style={{ border: 'solid'}} href={`${urlLogin}?${queryParameters}`} fullWidth> Log in with Spotify </Button>
          </Grid>
        </Paper>
      </div>
    </>
  )
}