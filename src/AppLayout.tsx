import * as React from 'react';
import styled from 'styled-components';
import { Footer } from './Footer';
import { Header, HeaderProps } from './Header';

const StyledApp = styled.div`
    font-family: Raleway;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`;

const ContentWrapper = styled.div`
    flex: 1;
    padding: 20px 130px;
`;

export const ContentItems = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    // set spacing between rect links
    & > div  {
        margin-right: 15px;
        margin-bottom: 45px;
    }

    & > div:nth-child(8)  {
        margin-right: 0px;
    }
`;

export type LayoutProps = {
    header: HeaderProps;
};

export const AppLayout: React.SFC<LayoutProps> = (props) => {
    return (
        <StyledApp>
            <Header {...props.header} />
            <ContentWrapper>
                {props.children}
            </ContentWrapper>
            <Footer />
        </StyledApp>
    );
};
