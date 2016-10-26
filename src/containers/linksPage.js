import React, {Component} from 'react';
import {Page, Toolbar, BackButton} from 'react-onsenui';

const LinksPage = () => {
    return (
        <Page>
            <Toolbar>
                <div className="left">
                    <BackButton>Back</BackButton>
                </div>
                <div className="center">
                    Links Page
                </div>
            </Toolbar>
        </Page>
    )
}
// class LinksPage extends Component {
//
//     constructor() {
//         super();
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
//                         Links Page
//                     </div>
//                 </Toolbar>
//             </Page>
//         )
//     }
// }

export default LinksPage;
