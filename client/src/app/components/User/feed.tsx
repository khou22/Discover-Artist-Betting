import * as React from 'react';
// import './styles.scss';
import { Feed, Icon, Header } from 'semantic-ui-react';

export type PublicProps = {};
export type Props = PublicProps;

function FeedExampleBasic({}: Props) {
    return (
        <div className="user-content">
            <Header as="h2">Activity Feed</Header>
            <Feed>
                <Feed.Event>
                    <Feed.Label>
                        <img src="https://i.pravatar.cc/100?1" />
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
                    <Feed.Label image="https://i.pravatar.cc/100?3" />
                    <Feed.Content>
                        <Feed.Summary>
                            <a>Helen Troy</a> made <a>2 new endorsements</a>
                            <Feed.Date>4 days ago</Feed.Date>
                        </Feed.Summary>

                        <Feed.Meta>
                            <Feed.Like>
                                <Icon name="like" />1 Like
                            </Feed.Like>
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                    <Feed.Label image="https://i.pravatar.cc/100?7" />
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
                    <Feed.Label image="https://i.pravatar.cc/100?9" />
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
