import styled from 'styled-components';

// Container for displaying a list of feed items
//
// To be used inside <Layout></Layout>
export const FeedContent = styled.div`
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

export default FeedContent;
