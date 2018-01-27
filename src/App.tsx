import * as React from 'react';
import { Layout } from 'Components/Layout';
import * as Feed from 'Components/Feed';
import { ProgramType } from 'Services/feed';

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

    renderIndex() {
        return (
            <Layout header={{ title: this.state.title }}>
                <Feed.Index
                    onProgramSelect={
                        (programType: ProgramType) =>
                            this.setState({
                                programType,
                            })
                    }
                />
            </Layout>
        );
    }

    renderFeed(programType: ProgramType) {
        const feedQueryProps = {
            feedURL: FEED_URL,
            maxItems: 21,
            minReleaseYear: 2010,
        };
        const title = 'popular ' + pluralize(programType);
        // Show feed list if program type was selected
        return (
            <Layout header={{ title }}>
                <Feed.List programType={programType} {...feedQueryProps} />
            </Layout>
        );
    }

    render() {
        const { programType } = this.state;
        // Show feed index if no program type selected
        if (!programType) {
            return this.renderIndex();
        } else {
            // Show feed list if program type was selected
            return this.renderFeed(programType);
        }
    }
}
