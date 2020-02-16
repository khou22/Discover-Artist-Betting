import * as React from 'react';
// import './styles.scss';
import { Feed, Icon } from 'semantic-ui-react';

export type PublicProps = {};
export type Props = PublicProps;

function FeedExampleBasic({}: Props) {
    return (
        <div className="user-content">
            <h1>Activity Feed</h1>
            <Feed>
                <Feed.Event>
                    <Feed.Label>
                        <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                            <Feed.User>Elliot Fu</Feed.User> added you as a friend
                            <Feed.Date>1 Hour Ago</Feed.Date>
                        </Feed.Summary>
                        <Feed.Meta>
                            <Feed.Like>
                                <Icon name="like" />4 Likes
                            </Feed.Like>
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                    <Feed.Label image="/images/avatar/small/helen.jpg" />
                    <Feed.Content>
                        <Feed.Summary>
                            <a>Helen Troy</a> made <a>2 new endorsements</a>
                            <Feed.Date>4 days ago</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra images>
                            <a>
                                <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </a>
                            <a>
                                <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </a>
                        </Feed.Extra>
                        <Feed.Meta>
                            <Feed.Like>
                                <Icon name="like" />1 Like
                            </Feed.Like>
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                    <Feed.Label image="/images/avatar/small/jenny.jpg" />
                    <Feed.Content>
                        <Feed.Summary
                            date="2 Days Ago"
                            user="Jenny Hess"
                            content=" added you as a friend"
                        />
                        <Feed.Meta>
                            <Feed.Like>
                                <Icon name="like" />8 Likes
                            </Feed.Like>
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                    <Feed.Label image="/images/avatar/small/joe.jpg" />
                    <Feed.Content>
                        <Feed.Summary>
                            <a>Joe Henderson</a> posted on his page
                            <Feed.Date>3 days ago</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra text>Bro Lil Nas X is killing!</Feed.Extra>
                        <Feed.Meta>
                            <Feed.Like>
                                <Icon name="like" />5 Likes
                            </Feed.Like>
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        </div>
    );
}

export default FeedExampleBasic;
