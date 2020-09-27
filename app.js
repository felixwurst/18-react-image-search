import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './components/Searchbar';
import getImages from './services/pixabay';
import ShowImages from './components/ShowImages';

class App extends React.Component {

    state = {
        searchWord: '',
        perPage: 5,
        pageNum: 1,
        language: '',
        imageType: '',
        orientation: '',
        category: '',
        minWidth: '',
        minHeight: '',
        colour: '',
        order: '',
        images: []
    }

    search = (
        searchWord,
        language,
        imageType,
        orientation,
        category,
        minWidth,
        minHeight,
        colour,
        order
    ) => {
        if (searchWord) {
            getImages(
                searchWord,
                this.state.perPage,
                1,
                language,
                imageType,
                orientation,
                category,
                minWidth,
                minHeight,
                colour,
                order
            ).then(data => {
                console.log(data);
                this.setState({
                    searchWord,
                    pageNum: 1,
                    language,
                    imageType,
                    orientation,
                    category,
                    minWidth,
                    minHeight,
                    colour,
                    order,
                    images: [...data.hits]
                });
            })
        } else {
            this.setState({ images: [] });
        }
    }
    goNext = () => {
        getImages(
            this.state.searchWord,
            this.state.perPage,
            this.state.pageNum + 1,
            this.state.language,
            this.state.imageType,
            this.state.orientation,
            this.state.category,
            this.state.minWidth,
            this.state.minHeight,
            this.state.colour,
            this.state.order
        ).then(data => {
            console.log(data);
            this.setState({
                pageNum: this.state.pageNum + 1,
                images: [...this.state.images, ...data.hits]
            });
        })
    }

    render() {
        return (
            <div className="container">
                <Searchbar search={this.search} />
                {this.state.images.length ? <ShowImages images={this.state.images} goNext={this.goNext} /> : ''}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#container'));

