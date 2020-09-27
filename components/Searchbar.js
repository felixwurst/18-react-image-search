import React from 'react';

class Searchbar extends React.Component {

    state = {
        searchWord: '',
        language: '',
        imageType: '',
        orientation: '',
        category: '',
        minWidth: '',
        minHeight: '',
        colour: '',
        order: ''
    };

    onSearchInpChange = e => {
        this.setState({ searchWord: e.target.value });
    }
    onLanguageSelectChange = e => {
        this.setState({ language: e.target.value });
    }
    onImageTypeSelectChange = e => {
        this.setState({ imageType: e.target.value });
    }
    onOrientationSelectChange = e => {
        this.setState({ orientation: e.target.value });
    }
    onCategorySelectChange = e => {
        this.setState({ category: e.target.value });
    }
    onMinWidthInpChange = e => {
        this.setState({ minWidth: e.target.value });
    }
    onMinHeightInpChange = e => {
        this.setState({ minHeight: e.target.value });
    }
    onColourSelectChange = e => {
        this.setState({ colour: e.target.value });
    }
    onOrderSelectChange = e => {
        this.setState({ order: e.target.value });
    }
    onSearchBtnClick = () => {
        this.props.search(
            this.state.searchWord,
            this.state.language,
            this.state.imageType,
            this.state.orientation,
            this.state.category,
            this.state.minWidth,
            this.state.minHeight,
            this.state.colour,
            this.state.order
        );
    }

    render() {
        return (
            <div className="row">
                {/* search */}
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="search"
                        value={this.state.searchWord}
                        onChange={this.onSearchInpChange}
                    />
                </div>
                {/* language, */}
                <div className="input-group mb-3">
                    <select className="custom-select" onChange={this.onLanguageSelectChange}>
                        <option value="">choose language</option>
                        <option value="en">english</option>
                        <option value="de">german</option>
                    </select>
                </div>
                {/* imageType, */}
                <div className="input-group mb-3">
                    <select className="custom-select" onChange={this.onImageTypeSelectChange}>
                        <option value="">choose image type</option>
                        <option value="all">all</option>
                        <option value="photo">photo</option>
                        <option value="illustration">illustration</option>
                        <option value="vector">vector</option>
                    </select>
                </div>
                {/* orientation, */}
                <div className="input-group mb-3">
                    <select className="custom-select" onChange={this.onOrientationSelectChange}>
                        <option value="">choose orientation</option>
                        <option value="all">all</option>
                        <option value="horizontal">horizontal</option>
                        <option value="vertical">vertical</option>
                    </select>
                </div>
                {/* category, */}
                <div className="input-group mb-3">
                    <select className="custom-select" onChange={this.onCategorySelectChange}>
                        <option value="">choose category</option>
                        <option value="backgrounds">backgrounds</option>
                        <option value="fashion">fashion</option>
                        <option value="nature">nature</option>
                        <option value="science">science</option>
                        <option value="education">education</option>
                        <option value="feelings">feelings</option>
                        <option value="health">health</option>
                        <option value="people">people</option>
                        <option value="religion">religion</option>
                        <option value="places">places</option>
                        <option value="animals">animals</option>
                        <option value="industry">industry</option>
                        <option value="computer">computer</option>
                        <option value="food">food</option>
                        <option value="sports">sports</option>
                        <option value="transportation">transportation</option>
                        <option value="travel">travel</option>
                        <option value="buildings">buildings</option>
                        <option value="business">business</option>
                        <option value="music">music</option>
                    </select>
                </div>
                {/* minWidth, */}
                <div className="input-group mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="min width"
                        value={this.state.minWidth}
                        onChange={this.onMinWidthInpChange}
                    />
                </div>
                {/* minHeight, */}
                <div className="input-group mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="min height"
                        value={this.state.minHeight}
                        onChange={this.onMinHeightInpChange}
                    />
                </div>
                {/* colour */}
                <div className="input-group mb-3">
                    <select className="custom-select" onChange={this.onColourSelectChange}>
                        <option value="">choose colour</option>
                        <option value="grayscale">grayscale</option>
                        <option value="transparent">transparent</option>
                        <option value="red">red</option>
                        <option value="orange">orange</option>
                        <option value="yellow">yellow</option>
                        <option value="green">green</option>
                        <option value="turquoise">turquoise</option>
                        <option value="blue">blue</option>
                        <option value="lilac">lilac</option>
                        <option value="pink">pink</option>
                        <option value="white">white</option>
                        <option value="gray">gray</option>
                        <option value="black">black</option>
                        <option value="brown">brown</option>
                    </select>
                </div>
                {/* order */}
                <div className="input-group mb-3">
                    <select className="custom-select" onChange={this.onOrderSelectChange}>
                        <option value="">choose order</option>
                        <option value="popular">popular</option>
                        <option value="latest">latest</option>
                    </select>
                </div>
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={this.onSearchBtnClick}
                >search</button>
            </div>
        );
    }
}

export default Searchbar;