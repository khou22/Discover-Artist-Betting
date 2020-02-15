import * as React from 'react';
import './styles.scss';
export type PublicProps = {};
import { Header, Grid, Image } from 'semantic-ui-react';

export type Props = PublicProps;

function RightMenuOne({}: Props) {
    return (
        <div className="rightMenu1-content">
            <div className="rightMenu1-content-profile">
                <img className="rightMenu1-content-img" src="https://i.imgur.com/AhXp5Cd.png"></img>
                <Header as="h3" className="rightMenu1-content-name">
                    Kevin Hou
                </Header>
            </div>
            <Grid rows={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default RightMenuOne;
