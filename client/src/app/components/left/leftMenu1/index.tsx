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
            <Link to={'/browse'}>
                <img className="leftMenu1-img" src={'https://i.imgur.com/KchILRq.png'} />
            </Link>

            <div className="leftMenu1-grid">
                <Grid columns={3}>
                    <Grid.Row>
                        <div className="leftMenu1-gridColumn">
                            <Grid.Column>
                                <Link to={'/browse'}>
                                    <Header>Browse</Header>
                                </Link>
                            </Grid.Column>
                        </div>
                    </Grid.Row>
                    <Grid.Row>
                        <div className="leftMenu1-gridColumn">
                            <Grid.Column>
                                <Link to={'/user'}>
                                    <div>
                                        <Header>My Page</Header>
                                    </div>
                                </Link>
                            </Grid.Column>
                        </div>
                    </Grid.Row>
                    <Grid.Row>
                        <div className="leftMenu1-gridColumn">
                            <Grid.Column>
                                <Link to={'/friends'}>
                                    <Header>Friends</Header>
                                </Link>
                            </Grid.Column>
                        </div>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    );
}

export default LeftMenuOne;
