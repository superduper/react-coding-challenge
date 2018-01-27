import * as React from 'react';
import styled from 'styled-components';
import { Footer } from './Footer';
import { Header, HeaderProps } from './Header';

const StyledLayout = styled.div`
    font-family: Raleway;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`;

const ContentWrapper = styled.div`
    flex: 1;
    padding: 20px 130px;
`;

export type LayoutProps = {
    header: HeaderProps;
};

export const Layout: React.SFC<LayoutProps> = (props) => {
    return (
        <StyledLayout>
            <Header {...props.header} />
            <ContentWrapper>
                {props.children}
            </ContentWrapper>
            <Footer />
        </StyledLayout>
    );
};
