import * as React from 'react';
import styled from 'styled-components';

class Images {
    static AppStore = require('./assets/store/app-store.svg');
    static GooglePlay = require('./assets/store/play-store.svg');
    static MicrosoftStore = require('./assets/store/windows-store.svg');
    static TwitterBlue = require('./assets/social/twitter-blue.svg');
    static TwitterWhite = require('./assets/social/twitter-white.svg');
    static InstagramBlue = require('./assets/social/instagram-blue.svg');
    static InstagramWhite = require('./assets/social/instagram-white.svg');
    static FacebookBlue = require('./assets/social/facebook-blue.svg');
    static FacebookWhite = require('./assets/social/facebook-white.svg');
}

const StyledFooter = styled.footer`

    @media (max-width: 420px) {
        padding: 20px 20px;
    }
    padding: 20px 130px;
    background: rgb(23,23,23);
    min-height: 225px;
    color: rgb(136,136,136);
    font-size: 13px;
`;

const Copyright = styled.div`
    margin-top: 15px;
    color: rgb(94,94,94);
    font-size: 12px;
`;

const BottomAppMarket = styled.div`
    @media (max-width: 420px) {
         display: flex;
         flex-direction: column;
         justify-content: center;
         margin-top: 15px;
    }

    img {
        height: 40px;
        margin-left: 20px;

        @media (max-width: 420px) {
             margin-top: 35px;
             margin-left: 0;
        }
    }

    img:first-child {
        margin-left: 0;
    }
`;

const BottomImgLinks = styled.div`
   display: flex;
   @media (max-width: 420px) {
        flex-direction: column;
   }
   flex-direction: row;
   justify-content: space-between;
   margin-top: 50px;

`;

const BottomSocial = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 420px) {
         justify-content: center;
    }

    a {
        cursor: pointer;
        height: 32px;
        width: 32px;
        margin-left: 20px;
    }
    a:first-child {
        margin-left: 0;
    }
`;
const FacebookLink = styled.a`
    background-size: auto 32px;
    background-repeat: no-repeat;
    background-position-x: center;
    background-image: url(${Images.FacebookWhite});
    &:hover {
        background-image: url(${Images.FacebookBlue});
    }
`;

const InstagramLink = styled.a`
    background-size: auto 32px;
    background-repeat: no-repeat;
    background-image: url(${Images.InstagramWhite});
    &:hover {
        background-image: url(${Images.InstagramBlue});
    }
`;

const TwitterLink = styled.a`
    background-size: 32px auto;
    background-repeat: no-repeat;
    background-position-y: 3px;
    background-image: url(${Images.TwitterWhite});
    &:hover {
        background-image: url(${Images.TwitterBlue});
    }
`;

export const Footer: React.SFC<{}> = (props) => {
    return (
        <StyledFooter>
            Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage  Account
                    <Copyright>Copyright &copy; 2016 DEMO Streaming. All Rights Reserved </Copyright>
            <BottomImgLinks>
                <BottomSocial>
                    <FacebookLink />
                    <InstagramLink />
                    <TwitterLink />
                </BottomSocial>
                <BottomAppMarket>
                    <img src={Images.AppStore} />
                    <img src={Images.GooglePlay} />
                    <img src={Images.MicrosoftStore} />
                </BottomAppMarket>
            </BottomImgLinks>
        </StyledFooter>
    );
};
