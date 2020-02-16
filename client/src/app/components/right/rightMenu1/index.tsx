import * as React from 'react';
import './styles.scss';
export type PublicProps = {};
import { Grid, Image } from 'semantic-ui-react';

export type Props = PublicProps;

function RightMenuOne({}: Props) {
    return (
        <div className="rightMenu1-content">
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
