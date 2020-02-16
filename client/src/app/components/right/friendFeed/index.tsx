import * as React from 'react';
import './styles.scss';
export type PublicProps = {};
import { Grid } from 'semantic-ui-react';

export type Props = PublicProps;

function FriendFeed({}: Props) {
    return (
        <div className="friendFeed-content">
            <Grid rows={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <div className="friendFeed-content-column">hi</div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="friendFeed-content-column">hi</div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="friendFeed-content-column">hi</div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default FriendFeed;
