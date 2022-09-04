import {Grid, Link, Typography} from "@mui/material";

function Header () {
  return (
    <>
      <Grid item xs={12} container justifyContent='center'>
        <Link href="/" underline="none">
          <Typography variant="h4" color='primary' sx={{ marginTop: 4, marginBottom: 8}}>ФЫЧЁВСКИЙ ПОКЕР</Typography>
        </Link>
      </Grid>
    </>
  );
}

export default Header;
