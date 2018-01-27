import * as React from 'react';
import { RectLink } from './RectLink';
import { ContentItems as Wrapper } from './AppLayout';
import { ProgramType } from './feed';

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
