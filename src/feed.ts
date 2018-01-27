import axios from 'axios';

export enum ProgramType {
    MOVIE = 'movie',
    SERIES = 'series',
}

export type Query = {
    programType: ProgramType;
    maxItems: number;
    minReleaseYear: number;
};

export type FeedItem = {
    programType: ProgramType;
    title: string;
    thumbnail: string;
};

function compareFeedItemsByTitle(a: FeedItem, b: FeedItem) {
    const itemA = a.title.toLowerCase(), itemB = b.title.toLowerCase();
    // sort string ascending
    if (itemA < itemB) {
        return -1;
    }
    if (itemA > itemB) {
        return 1;
    }
    return 0; // if equal
}

/*
*   Fetches feed
*
*   Use query to filter and limit output
*
*   Result is sorted by title in alphanumeric order (ascending)
*/
export async function fetch(url: string, query: Query): Promise<FeedItem[]> {
    // Get data
    const result = await axios({
        method: 'get',
        url,
    });

    // Extract data we need

    const movies: FeedItem[] = [];

    for (const movie of result.data.entries) {
        if (movie.programType !== query.programType) {
            continue;
        }
        if (query.minReleaseYear >= movie.releaseYear) {
            continue;
        }
        movies.push({
            thumbnail: movie.images['Poster Art'].url as string,
            title: movie.title as string,
            programType: movie.programType as ProgramType,
        });
    }

    return movies.slice(0, query.maxItems).sort(compareFeedItemsByTitle);
}
