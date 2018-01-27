import * as React from 'react';
import { ProgramType } from 'Services/feed';
import { FeedContent as Wrapper } from './FeedContent';
import { RectLink } from './RectLink';

export type FeedIndexProps = {
    onProgramSelect: (programType: ProgramType) => any;
};

export const FeedIndex: React.SFC<FeedIndexProps> = (props: FeedIndexProps) => {
    return (
        <Wrapper>
            <RectLink
                title="series"
                subtitle="popular series"
                onClick={() => props.onProgramSelect(ProgramType.SERIES)}
            />
            <RectLink
                title="movies"
                subtitle="popular movies"
                onClick={() => props.onProgramSelect(ProgramType.MOVIE)}
            />
        </Wrapper>
    );
};
