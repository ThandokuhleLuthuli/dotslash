import React from 'react';
import Menu from '../layout/menu/menu';
import Header from '../components/header/header';
import Search from '../components/search/search';
import Banner from '../components/banner/banner';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import Details from '../components/product-details/productDetails';
import SelectBox from '../components/select-box/selectBox';
import  Carousel  from '../components/carousel/carousel';
import Title from '../components/section-title/title';
import Mail from '../components/mail-list/mail';
import ad from '../assets/images/Advert.png';
import Card from '../components/card/card';
import Footer from '../layout/footer/footer';

import boot1 from '../assets/images/Rectangle\ 26hargrave.png';
import boot2 from '../assets/images/Rectangle\ 26cameroon.png';
import boot3 from '../assets/images/Rectangle\ 26jean.png';
import boot4 from '../assets/images/Rectangle\ 26cameroon.png';
import boot5 from '../assets/images/Rectangle\ 26orca.png' ;
import store from '../assets/images/store-altstore-icon.png';
import tag from '../assets/images/tag2.png';


function Product() {
    return(
        <div className="product">
            <Menu/>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Search/>
                        <img className="product_advert" src={ad} alt="banner-advert"/>
                        <Mail/>
                    </div>
                    <div className="col-8">
                        <Banner/>
                        <Breadcrumbs/>
                            <div className="carousel_row">
                            <div className="col-6">
                            <Carousel/>
                        </div>
                        <div className="col-6 product_column">
                            <Details store={store} tag={tag}/>
                            <SelectBox/>
                        </div>
                            </div>
                        <Title heading="more from" text="boots"/>
                        <div className="product_card-row">
                            <Card title="Hargrave Ankle boot" src={boot1} subtitle="Superbalist" icon={store} price="R500" noDiscount="no-discount" noStock="no-stock"/>
                            <Card title="Orca" src={boot2} subtitle="Superbalist" icon={store} price="R500" noDiscount="no-discount" noStock="no-stock" />
                            <Card title="Jean Hiker Boots" src={boot3} stock="low stock" subtitle="Superbalist" icon={store} price="R500" discount="-40% Off" tag={tag}/>
                            <Card title="Cameron leather " src={boot4} subtitle="Superbalist" icon={store} price="R500" noDiscount="no-discount" noStock="no-stock"/>
                            <Card title="Orca" src={boot5}subtitle="Superbalist" stock="low stock" icon={store} price="R500" noDiscount="no-discount" />
                            <Card title="Hargrave Ankle boot" src={boot1}subtitle="Superbalist"icon={store} price="R500" noDiscount="no-discount" noStock="no-stock"/>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Product;