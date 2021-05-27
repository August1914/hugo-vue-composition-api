<template>
    <div id="app">
        <BookSearch
                @search-by="setQuery" />
        <br/>
        <BookList
                :books="state.filteredBooks" />
        <BookDetails
                :book="state.selectedBook" />
    </div>
</template>

<script>
import { reactive, computed } from 'vue';
import BookList from './components/BookList.vue';
import BookSearch from './components/BookSearch.vue';
import BookDetails from './components/BookDetails.vue';

const books = [
    {
        title: "The Cherry Orchard",
        author: "Anton Chekov"
    },
    {
        title: "Ivanov",
        author: "Anton Chekov"
    }];

function isInQuery(query){
    return function (book){
        return (
            (!query.title || book
                .title.toLowerCase()
                .includes(query.title.toLowerCase())) &&
            (!query.author || book
                .author.toLowerCase()
                .includes(query.author.toLowerCase())));
    };
}


export default {
    components: {
        BookSearch,
        BookList,
        BookDetails
    },

    setup() {
        const state = reactive({
            query: {},
            filteredBooks: computed(filterBooks),
            selectedId: 0
        });

        function setQuery(query){
            state.query = query;
        }

        function selectBook(id){
            state.selectedBook = {id}
        }

        function filterBooks(){
            return books.filter(isInQuery(state.query));
        }

        return {
            state,
            setQuery,
            selectBook
        }
    }
}
</script>
