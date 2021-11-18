import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

type TParams = { id: string };

/* eslint-disable-next-line */
export interface StoreFeatureCardDetailProps
  extends RouteComponentProps<TParams> {}

export const StoreFeatureCardDetail = (props: StoreFeatureCardDetailProps) => {
  return (
    <div className="container">
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.match.params.id}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default StoreFeatureCardDetail;
