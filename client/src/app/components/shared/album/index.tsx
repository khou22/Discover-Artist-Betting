import * as React from 'react';
import { Card, Image } from 'semantic-ui-react';
import * as Models from '../../../models';

export type PublicProps = {
    onClick: () => void;
    artist: Models.Artist;
};

export type Props = PublicProps;

const Album = ({ artist, onClick }: Props) => {
    return (
        <Card onClick={onClick}>
            <Image src={artist.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{artist.name}</Card.Header>
            </Card.Content>
        </Card>
    );
};

export default Album;
