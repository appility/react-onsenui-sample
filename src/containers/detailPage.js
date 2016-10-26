import React, { Component } from 'react';
import { Page, Toolbar, BackButton, Button } from 'react-onsenui';
import LinksPage from './linksPage';
import { connect } from 'react-redux';

const DetailPage = ({ navigator, setData }) => {
    let pushPage = (e) => {
        e.preventDefault();
        navigator.pushPage({component: LinksPage, animation: 'slide'});
    }

    return (
        <Page>
            <Toolbar>
                <div className="left">
                    <BackButton>Back</BackButton>
                </div>
                <div className="center">
                    Detail Page
                </div>
            </Toolbar>
            <div className="main-body" style={{marginTop: 45 + 'px'}}>
                <Button onClick={e => pushPage(e)}>Links Page</Button>
            </div>
        </Page>
    )
}
export default connect()(DetailPage);
// class DetailPage extends Component {
//
//     constructor() {
//         super();
//         this.pushPage = this.pushPage.bind(this);
//     }
//
//     pushPage() {
//         this.props.navigator.pushPage({component: LinksPage, title: 'Links', animation: 'slide'});
//     }
//
//     render() {
//         return (
//             <Page>
//                 <Toolbar>
//                     <div className="left">
//                         <BackButton>Back</BackButton>
//                     </div>
//                     <div className="center">
//                         Detail Page
//                     </div>
//                 </Toolbar>
//                 <div className="main-body" style={{marginTop: 45 + 'px'}}>
//                     <Button onClick={e => this.pushPage()}>Links Page</Button>
//                 </div>
//             </Page>
//         )
//     }
// }
