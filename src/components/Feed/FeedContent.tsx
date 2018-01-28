import styled from 'styled-components';

// Container for displaying a list of feed items
//
// To be used inside <Layout></Layout>
export const FeedContent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    /* set spacing between rect links */
    & > div  {
        margin-bottom: 45px;
        margin-right: 15px;
    }

    @media (max-width: 440px) {
        justify-content: space-between;
        & > div:nth-child(odd)  {
            margin-right: 15px;
        }
        & > div:nth-child(even)  {
            margin-right: 0px;
        }
    }
`;

export default FeedContent;
