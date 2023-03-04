import { Button, Container, Grid } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Header from './Header'

function GamesView (): JSX.Element {
  return (
    <Container maxWidth="sm">
      <Header></Header>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} container justifyContent="center">
          <Button
            to={'/game'}
            component={RouterLink}
            variant="outlined"
            size="large">
            Новая игра
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default GamesView
