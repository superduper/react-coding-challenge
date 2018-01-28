import * as React from 'react';
import styled from 'styled-components';

const AppTitle = styled.h1`
    cursor: pointer;
    padding: 0;
    margin: 0;
    font-weight: 700;
    font-size: 25px;

    @media (max-width: 440px) {
        font-size: 100%;
    }

    @media (min-width: 680px) {
      font-size: 20px;
    }

`;

const Top = styled.header`
    background: linear-gradient(rgb(0, 130, 255), rgb(0, 69, 226));
    color: white;
    padding: 15px 130px;


    box-shadow: 2px 0px 15px black;
    max-height: 60px;

    font-size: 13px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    @media (max-width: 680px) {
      padding: 15px 20px;
    }

    @media (max-width: 440px) {
      padding: 10px;
    }

`;

const Bottom = styled.div`
    color: white;
    font-size: 20px;
    font-weight: 400;
    padding: 13px 130px;
    text-transform: capitalize;

    @media (max-width: 440px) {
      padding: 10px;
    }

`;

const Nav = styled.div`
    > a  {

        @media (max-width: 340px) {
            margin-left: 15px;
        }

        @media (max-width: 440px) {
           font-size: 90%;
           margin-left: 15px;
        }

        @media (min-width: 440px) {
            margin-left: 25px;
        }

    }
    > a:first-child {
        margin-left: 0;
    }
`;

const StyledHeader = styled.div`
    background: rgb(50,50,50);
    box-shadow: 0px 0px 10px black;
`;

const StartTrialButton = styled.a`
    cursor: pointer;
    max-height: 30px;
    padding: 10px 15px;
    background: linear-gradient(rgb(50, 50, 50), rgb(40, 40, 40));

    @media (max-width: 440px) {
        &  {
            padding: 5px;
        }
    }

`;

export type HeaderProps = {
    title: string;
    onAppTitleClick?: () => any;
};

export const Header: React.SFC<HeaderProps> = (props) => {
    return (
        <StyledHeader>
            <Top>
                <AppTitle onClick={props.onAppTitleClick}>DEMO Streaming</AppTitle>
                <Nav>
                    <a href="">Log in</a>
                    <StartTrialButton> Start your free trial</StartTrialButton>
                </Nav>
            </Top>
            <Bottom>{props.title}</Bottom>
        </StyledHeader>
    );
};
