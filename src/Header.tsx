import * as React from 'react';
import styled from 'styled-components';

const AppTitle = styled.h1`
    padding: 0;
    margin: 0;
    font-weight: 700;
    font-size: 25px;
    @media (max-width: 420px) {
      font-size: 15px;
      max-width: 80px;
    }
`;

const NavTitle = styled.header`
    background: linear-gradient(rgb(0, 130, 255), rgb(0, 69, 226));
    color: white;
    padding: 15px 130px;


    @media (max-width: 420px) {
      padding: 20px 20px;
    }

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
`;

const SubTitle = styled.div`
    color: white;
    font-size: 20px;
    font-weight: 400;
    padding: 13px 130px;
    text-transform: capitalize;
`;

const Nav = styled.div`
     a {
        margin-left: 25px;
    }
     a:first-child {
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
`;

export type HeaderProps = {
    title: string;
};

export const Header: React.SFC<HeaderProps> = (props) => {
    return (
        <StyledHeader>
            <NavTitle>
                <AppTitle>DEMO Streaming</AppTitle>
                <Nav>
                    <a href="">Log in</a>
                    <StartTrialButton> Start your free trial</StartTrialButton>
                </Nav>
            </NavTitle>
            <SubTitle>{props.title}</SubTitle>
        </StyledHeader>
    );
};
