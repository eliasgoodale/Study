import React, { Component } from 'react';

class NewsItem extends Component {

    render() {
        return (
            <div className="news-item">
                <Image />
                <Title />
                <Byline />
                <Description />
            </div>
        );
    }
}