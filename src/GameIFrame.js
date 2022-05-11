import './App.css';
import './amex.css'
import $ from 'jquery'
import React from 'react';

class GameIFrame extends React.Component {

    componentDidMount() {

        $(function () {
            $("#myframe").on("click", fullscreenClick)

            function fullscreenClick() {
                //The button is this
                //We want to clone the parent
                var box = $("#myframe")
                //create a holder box so the layout stays the same
                var holder = $(box).clone(false, true);
                //and make it not visible
                $(holder).css({
                    "visibility": "hidden"
                });

                //Get its position
                var pos = $(box).position();

                //Substitute our box with our holder
                $(box).before($(holder));

                //Set the position of our box (not holder)
                //Give it absolute position (eg. outside our set structure)
                $(box).css({
                    "position": "absolute",
                    "left": pos.left + "px",
                    "top": pos.top + "px",
                    "z-index": 1000,
                    "overflow": "hidden",
                });

                //Set class so it can be animated
                $(box).addClass("fullscreen");

                //Animate the position
                $(box).animate({
                    "top": 0,
                    "left": 0,
                }, 250);

            }
        });
    }

    render() {
        
        return(
        <div id = "myframe" className = 'iframeHolder' />
    );
    };

    
    
}

export default GameIFrame;
