/**
    * @let before, get the element before target
    * @let footer, it is the target
    * @let top, it contains the final result for positionament, it is calculated with the top positionament of
    * <<before>> variable plus the height of <<before>> variable plus the product of division of target height 
    * by two
	* @let distance, it is the top spacement of the footer in relation to remainder of content, its default value is 30px
	* @function bottom, it is the main function used to set the footer position
    * 
*/

let distance;

function bottom (elem, marginTop = '30px') {
    let element = document.querySelector(elem);

    distance = marginTop;

    if (getPositionamentOptions(element)) {
        setLastElement(element);
    } else {
        setAbsoluteBottom(element);
    }

    document.body.onchange = function () {
        if (getPositionamentOptions(element)) {
            setLastElement(element);
        } else {
            setAbsoluteBottom(element);
        }
    }
}

function setLastElement (element) {    
    //Set styles
    element.style.top = distance;
    element.style.bottom = 'unset';
    element.style.position = 'relative';  

    /**
     * Responsive Positionament
     * @event onresize, is the responsable to responsive activity on positionament
     */

    window.onresize = function () {

        if (getPositionamentOptions(element)) {
            setLastElement(element);
        } else {
            setAbsoluteBottom(element);
        }
    }
}

function setAbsoluteBottom (element) {
    //Set styles
    element.style.top = 'unset';
    element.style.bottom = '0';
    element.style.position = 'absolute';

    window.onresize = function () {

        if (getPositionamentOptions(element)) {
            setLastElement(element);
        } else {
            setAbsoluteBottom(element);
        }
    }
}

function getPositionamentOptions (element) {
    let footer = element,
    footerPrevTop = footer.previousElementSibling.offsetTop,
    footerPrevHeight = footer.previousElementSibling.offsetHeight;
    /**
     * If Body < than Window return false, else return true
     * False for @function setAbsoluteBottom
     * True for @function setLastElement
     */

    window.onresize = function () {
        getPositionamentOptions(element);
    }

    if (Number.parseInt(footerPrevTop + footerPrevHeight + footer.offsetHeight) < window.innerHeight) {
        return false;
    } else {
        return true;
    }

}