/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default ({ list, buy, error, id }) => {
  return (
    <div style={{ display: 'flex', gap: 30 }}>
      {list.map((item, index) => {
        return (
          <Card key={index} sx={{ maxWidth: 345, backgroundColor: 'teal' }}>
            <CardMedia
              component='img'
              alt='green iguana'
              height='300'
              image={item.img}
            />
            <CardContent>
              {id && (
                <Typography gutterBottom variant='h2' component='div'>
                  {item.id}
                </Typography>
              )}
              <Typography variant='h3' color='text.secondary'>
                {item.title}
              </Typography>
            </CardContent>

            {buy && (
              <CardActions>
                <Button
                  onClick={() => {
                    console.log(item.id);
                  }}
                  size='medium'
                  variant='contained'
                  color='success'
                >
                  Buy
                </Button>
              </CardActions>
            )}
            {error && (
              <CardActions>
                <Button
                  onClick={() => {
                    console.log(item.title);
                  }}
                  size='medium'
                  variant='contained'
                  color='error'
                >
                  ERROR!!!
                </Button>
              </CardActions>
            )}
          </Card>
        );
      })}
    </div>
  );
};
