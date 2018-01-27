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

`;

export default FeedContent;
