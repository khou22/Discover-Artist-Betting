import * as React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header } from 'semantic-ui-react';
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
                        <Link to={'/browse'}>
                            <Header>Browse</Header>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="leftMenu1-gridCol">
                        <Link to={'/home'}>
                            <Header>Home</Header>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="leftMenu1-gridCol">
                        <Link to={'/friends'}>
                            <Header>Friends</Header>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default LeftMenuOne;
