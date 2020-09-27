const getImages = (
    searchWord,
    perPage,
    pageNum,
    language,
    imageType,
    orientation,
    category,
    minWidth,
    minHeight,
    colour,
    order
) => {
    const url = 'https://pixabay.com/api/'
        + '?key=12000491-41fc68d8c365df909e022ceb6'
        + '&q=' + searchWord
        + (perPage ? '&per_page=' + perPage : '')
        + (pageNum ? '&page=' + pageNum : '')
        + (language ? '&lang=' + language : '')
        + (imageType ? '&image_type=' + imageType : '')
        + (orientation ? '&orientation=' + orientation : '')
        + (category ? '&category=' + category : '')
        + (minWidth ? '&min_width=' + minWidth : '')
        + (minHeight ? '&min_height=' + minHeight : '')
        + (colour ? '&colors=' + colour : '')
        + (order ? '&order=' + order : '')

    return new Promise((resolve, reject) => {
        fetch(url).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    resolve(data);
                }).catch(err => {
                    reject(err);
                })
            } else {
                reject(new Error("Can't get data! Response status: " + response.status));
            }
        }).catch(err => {
            reject(err);
        })
    })
}

export default getImages;