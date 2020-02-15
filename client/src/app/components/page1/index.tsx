import * as React from 'react';
import { Header } from 'semantic-ui-react';

export type PublicProps = {};

type State = {};

export type Props = PublicProps;

class PageOne extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <Header as="h1">Page One</Header>
            </div>
        );
    }
}

export default PageOne;
