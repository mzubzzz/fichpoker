import { Button, Container, Grid } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Header from './Header'

function StartView (): JSX.Element {
  return (
    <Container maxWidth="sm">
      <Header></Header>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} container justifyContent="center">
          <Button
            to={'/tables'}
            component={RouterLink}
            variant="outlined"
            size="large">
            Таблицы
          </Button>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Button
            to={'/games'}
            component={RouterLink}
            variant="outlined"
            size="large">
            Играть оффлайн
          </Button>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Button variant="outlined" size="large" disabled>
            Играть онлайн
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default StartView
