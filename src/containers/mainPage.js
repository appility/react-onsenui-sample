import React from 'react';
import { Page, Toolbar, Button, Carousel, CarouselItem } from 'react-onsenui';
import DetailPage from './detailPage';
import { connect } from 'react-redux';
import { SET_DATA } from '../actions/actionTypes';
import actionCreator from '../actions/actionCreator';

const MainPage = ({ navigator, dispatch, datas }) => {

    console.log('MainPage');
    console.log('navigator', navigator);
    console.log('dispatch', dispatch);
    console.log('datas', datas);

    let pushPage = () => {
        navigator.pushPage({ component: DetailPage, animation: 'slide'});
    }

    let setData = (e, item) => {
        e.preventDefault();
        dispatch(actionCreator(SET_DATA, item));
    }

    return (
        <Page>
            <Toolbar>
                <div className="center">
                    Start Up News
                </div>
            </Toolbar>
            <Carousel fullscreen swipeable autoScroll overscrollable style={{marginTop: 44 + 'px'}}>
                {
                    datas.map(data => {
                        <CarouselItem>
                            <ListItem data={data.list} />
                        </CarouselItem>
                    })
                }
            </Carousel>
        </Page>
    )
}
function mapStateToProps(state) {
    return {
        datas: state.dates
    }
}

function mapDispacthToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispacthToProps
)(MainPage);
// class MainPage extends React.Component {
//     constructor() {
//         super();
//         this.pushPage = this.pushPage.bind(this);
//     }
//
//     pushPage() {
//         this.props.navigator.pushPage({component: DetailPage, title: 'Detail', animation: 'slide'});
//     }
//
//     render() {
//         const {datas} = this.props.state;
//         return (
//             <Page>
//                 <Toolbar>
//                     <div className="center">
//                         Start Up News
//                     </div>
//                 </Toolbar>
//                 <Carousel fullscreen swipeable autoScroll overscrollable style={{marginTop: 44 + 'px'}}>
//                     <CarouselItem>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur rerum molestias veniam asperiores quas tempore et culpa deleniti nisi! Repellat libero illo dolores nemo optio aliquid similique voluptate impedit id voluptas non soluta tempora, provident, qui nihil quia, at tenetur omnis dicta error vero sed! Error quo autem, velit nulla?
//                     </CarouselItem>
//                     <CarouselItem>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ea quam id vero enim beatae reprehenderit laboriosam excepturi nihil fugit nisi hic adipisci sunt natus, recusandae illo reiciendis ex asperiores quisquam, omnis perferendis ducimus eaque. Soluta modi, expedita blanditiis cupiditate. Sunt molestias molestiae fugiat officiis, animi laudantium aut, a iste.
//                     </CarouselItem>
//                 </Carousel>
//             </Page>
//         )
//     }
// }
