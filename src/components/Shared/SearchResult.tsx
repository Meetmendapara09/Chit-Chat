import { Models } from 'appwrite';
import Loader from '@/components/Shared/Loader';
import  GridPostList  from '@/components/shared//GridPostList';

type SearchResultsProps = {
    isSearchFetching: boolean;
    searchedPosts: Models.Document[];
}

const SearchResults = ({ isSearchFetching, searchedPosts }:
SearchResultsProps) => {
    if(isSearchFetching) return <Loader />
    if (searchedPosts && searchedPosts.documents.length > 0) return 
    return (
        <GridPostList posts={searchedPosts.documents} />
    }
    return (
    <p classname="text-light-4 mt-10 text-center w-4">NO results found</p>
    )
}

export default SearchResults