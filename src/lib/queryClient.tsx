/* Core */
import { QueryClient, QueryOptions } from 'react-query';
// import waait from 'waait';

const defaultQueryFn = async (options: QueryOptions) => {
    const { queryKey } = options;

    const endpoint = queryKey?.[0];

    const response = await fetch(`${process.env.REACT_APP_API_URL}${endpoint}`);
    const data = await response.json();

    // await waait(1000);

    return data;
};

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: defaultQueryFn,
        },
    },
});
