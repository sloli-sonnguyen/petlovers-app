import React from 'react';
import PropTypes from 'prop-types';
import gallerySVG from '../../../assets/images/gallery.svg';


const imageUrls = [
    { id: 1, url: 'https://www.abc.net.au/cm/rimage/11095486-4x3-large.jpg?v=2' },
    { id: 2, url: 'https://ontariospca.ca/wp-content/uploads/2018/04/Cat-outside-small-600x399.png' },
    { id: 3, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYtUSHp29-aNsWwT6khxYETjgiZIoAvP-jgw&usqp=CAU' },
    { id: 4, url: 'https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2020/04/petCoronovirus-DG-042320-770x553-1-650x428.jpg' },
    { id: 5, url: 'https://cdn.shopify.com/s/files/1/2194/6011/files/adorable-animal-cat-747795_grande.jpg?v=1545527845' },
    { id: 6, url: 'https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg' },
    { id: 7, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQelyAZ7JOm6z2bgBkEO-k3BEOF7DOn2TytjA&usqp=CAU' },
    { id: 8, url: 'https://cdn.pixabay.com/photo/2018/05/13/21/24/cat-3398010_960_720.jpg' }
]

function renderImages(list) {
    return list.map((item, index) => {
        return (
            <div key={index} className="item"><img src={item.url} alt="pet" className="image" /></div>
        );
    });
}

Gallery.propTypes = {

};

function Gallery(props) {
    return (
        <div className="gallery">
            <div className="gallery__header">
                <div className="icon-wrap">
                    <img src={gallerySVG} alt="gallery" />
                </div>
                <p>Hình ảnh</p>
            </div>
            <div className="gallery__content">
                {renderImages(imageUrls)}
            </div>
        </div>
    );
}

export default Gallery;