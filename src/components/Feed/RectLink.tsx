import * as React from 'react';
import styled from 'styled-components';

class Images {
    static placeholder = require('Assets/placeholder.png');
}

export type InnerProps = {
    thumbnail?: string;
};

const Inner = styled<InnerProps, 'div'>('div') `
    cursor: pointer;
    width: 135px;
    height: 200px;
    background: rgb(23,23,23) center;
    background-image: url(${props => props.thumbnail || Images.placeholder});
    background-size: contain;
    background-repeat: no-repeat;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 135px;
`;

const Title = styled.span`
    font-weight: 700;
    font-size: 27px;
    text-transform: uppercase;
`;

const Subtitle = styled.span`
    text-transform: capitalize;
    font-size: 13px;
`;

export type RectLinkProps = {
    title?: string;
    subtitle: string;
    onClick?: () => any;
} & InnerProps;

export const RectLink: React.SFC<RectLinkProps> = (props) => {
    return (
        <Wrapper onClick={props.onClick}>
            <Inner {...props}><Title>{props.title}</Title></Inner>
            <Subtitle>{props.subtitle}</Subtitle>
        </Wrapper>
    );
};
