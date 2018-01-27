import * as React from 'react';
import { AppLayout } from './AppLayout';
import { FeedList } from './FeedList';
import { FeedIndex } from './FeedIndex';
import { ProgramType } from './feed';

const FEED_URL = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';

type State = {
    title: string;
    programType?: ProgramType;
};

function pluralize(word: string) {
    if (word.slice(word.length - 1) === 's') {
        return word;
    }
    return word + 's';
}

export default class App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            title: 'Popular Titles',
        };
    }
    render() {
        const feedQueryProps = {
            feedURL: FEED_URL,
            maxItems: 21,
            minReleaseYear: 2010,
        };

        // Show feed index if no program type selected
        if (!this.state.programType) {
            return (
                <AppLayout header={{ title: this.state.title }}>
                    <FeedIndex
                        onProgramSelect={
                            (programType: ProgramType) =>
                                this.setState({
                                    programType,
                                })
                        }
                    />
                </AppLayout>
            );
        }

        // Show feed list if program type was selected
        return (
            <AppLayout header={{ title: 'popular ' + pluralize(this.state.programType) }}>
                <FeedList programType={this.state.programType} {...feedQueryProps} />
            </AppLayout>
        );
    }
}
