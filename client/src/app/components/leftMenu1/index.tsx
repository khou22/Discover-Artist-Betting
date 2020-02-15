import * as React from 'react';
import { Header, Grid } from 'semantic-ui-react';
import './styles.scss';
export type PublicProps = {};

// type State = {};

export type Props = PublicProps;

function LeftMenuOne({}: Props) {
    return (
        <div className="leftMenu1-content">
            <img className="leftMenu1-img" src={'https://i.imgur.com/KchILRq.png'} />
            <Grid className="leftMenu1-grid" columns={3}>
                <Grid.Row>
                    <Grid.Column className="leftMenu1-gridCol">
                        <Header>Browse</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="leftMenu1-gridCol">
                        <Header>Radio</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="leftMenu1-gridCol">
                        <Header>Friends</Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default LeftMenuOne;
