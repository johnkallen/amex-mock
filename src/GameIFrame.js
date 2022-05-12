import './App.css';
import './amex.css';
import './GameIFrame.css';
import $ from 'jquery'
import React from 'react';
// import invaders from './Images/play_pay_invaders.png';

class GameIFrame extends React.Component {

    componentDidMount() {

        // $(function () {
        //     $("#frameButton").on("click", fullscreenClick)

        //     function fullscreenClick() {
        //         //The button is this
        //         //We want to clone the parent
        //         var box = $("#myframe")
        //         //create a holder box so the layout stays the same
        //         var holder = $(box).clone(false, true);
        //         //and make it not visible
        //         $(holder).css({
        //             "visibility": "hidden"
        //         });

        //         //Get its position
        //         var pos = $(box).position();

        //         //Substitute our box with our holder
        //         $(box).before($(holder));

        //         //Set the position of our box (not holder)
        //         //Give it absolute position (eg. outside our set structure)
        //         $(box).css({
        //             "position": "absolute",
        //             "left": pos.left + "px",
        //             "top": pos.top + "px",
        //             "z-index": 1000,
        //             "overflow": "hidden",
        //             "height": "100vh"
        //         });

        //         //Set class so it can be animated
        //         $(box).addClass("fullscreen");

        //         //Animate the position
        //         $(box).animate({
        //             "top": 0,
        //             "left": 0,
        //         }, 5000);
        //     }
        // });
    }

    render() {

        return (
            <div className='gameFrame'>
                {/* <iframe id="myframe" src='http://localhost:3000/'></iframe> */}
                <div>
                    <a href="http://localhost:3000/">
                        <img className='gameImage' src="./play_pay_invaders.png" height="200" width="300" />
                    </a>
                </div>

                <div id='frameButton'>
                    <a href="http://localhost:3000/">
                        <div className="picText">
                            <h1>Need A Break</h1>
                            <br />
                            <h2>Play vPayment Invoice Invaders</h2>
                            <h6>*terms and restrictions apply</h6>
                        </div>
                    </a>
                </div>
            </div>
        );
    };



}

export default GameIFrame;
