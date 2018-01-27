import * as React from 'react';
import { RectLink } from './RectLink';
import { FeedContent as Wrapper } from './FeedContent';
import * as feed from 'Services/feed';

export type FeedListProps = {
    feedURL: string;
} & feed.Query;

type State = {
    items?: any[];
    error?: Error;
};

export class FeedList extends React.Component<FeedListProps, State> {
    constructor(props: FeedListProps) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        await this.fetchItems();
    }

    async fetchItems() {
        try {
            const items = await feed.fetch(this.props.feedURL, this.props);
            // Pass data to the state
            this.setState({
                items,
            });
        } catch (error) {
            // Save error to the state
            this.setState({
                error,
            });
        }
    }

    render() {
        if (this.state.error) {
            return <span>Oops, something went wrong...</span>;
        }

        if (!this.state.items) {
            return <span>Loading...</span>;
        }

        return (
            <Wrapper>
                {this.state.items.map(item => (
                    <RectLink
                        thumbnail={item.thumbnail}
                        subtitle={item.title}
                    />
                ))}
            </Wrapper>
        );
    }
}
