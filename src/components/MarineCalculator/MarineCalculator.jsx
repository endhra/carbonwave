import React from "react";
// @material-ui/core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
// icons
import { faChevronUp, faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 import { withStyles } from "tss-react/mui";

import marineCalculatorStyle from "assets/jss/material-kit-react/components/marineCalculatorStyle.jsx";

class MarineCalculator extends React.Component {
  componentDidMount() {
    const sliderWrapper = document.getElementById("calculator__sliderwrapper");
    const slider = document.getElementById("calculator__custom-range");
    const sliderFill = document.getElementById("calculator__sliderfill");
    const thumb = document.getElementById("calculator__sliderthumb");
    const thumbLabel = document.getElementById("calculator__sliderthumb-label");
    // hidden value above the slider thumb
    const sliderValue = document.getElementById("calculator__slidervalue");

    const elementCustomRange = document.getElementById("calculator__value-custom-range");
    const elementSecond = document.getElementById("calculator__value-second-element");
    const elementThird = document.getElementById("calculator__value-third-element");
    const elementFourth = document.getElementById("calculator__value-fourth-element");

    let valueCustomRange = 1;
    
    const valueSecondElement = 183;
    const valueThirdElement = 1.2;
    const valueFourthElement = 45;

    if (!slider) {
    return;
    }

    //set initial value for the slider
    slider.value = 5;
    //we adjust the width to be equal to the height because the element is rotated
    slider.style.width = `calc(${getComputedStyle(sliderWrapper).getPropertyValue("height")})`

    // update slider
    // updateSlider(slider.value);

    valueCustomRange = 5;
    elementCustomRange.textContent = valueCustomRange;

    const format = new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short"
    });
    elementSecond.textContent = format.format(valueCustomRange * valueSecondElement|0);
    elementThird.textContent = format.format(valueCustomRange * valueThirdElement|0);
    elementFourth.textContent = format.format(valueCustomRange * valueFourthElement|0);

    slider.addEventListener("input", () => {
      updateSlider(slider.value);
      valueCustomRange = slider.value;
      elementCustomRange.textContent = valueCustomRange;
      const format = new Intl.NumberFormat("en-US", {
          compactDisplay: "short"
      });
      elementSecond.textContent = format.format(valueCustomRange * valueSecondElement);
      elementThird.textContent = format.format(valueCustomRange * valueThirdElement);
      elementFourth.textContent = format.format(valueCustomRange * valueFourthElement);
    });

    function updateSlider(val) {
      //sets the text display and location for each thumb and the slider fill
      const min = Number(slider.getAttribute("min"));
      const max = Number(slider.getAttribute("max"));
      const percentage = (val / (max - min)) * 100;
      thumbLabel.style.display = "none";
      setThumbText(sliderValue, val, percentage);
      setThumb(thumb, percentage);
      setSliderFill(sliderFill, percentage);
    }

    function setThumbText(elem, val, percentage) {
      const size = getComputedStyle(elem).getPropertyValue("width");
      const newx = `calc(${percentage}% - ${parseInt(size, 10) / 2}px)`;
      elem.style.left = newx;
      elem.innerHTML = val;
    }

    function setThumb(elem, val) {
      const size = getComputedStyle(elem).getPropertyValue("width");
      const newx = `calc(${val}% - ${parseInt(size, 10) / 2}px)`;
      elem.style.bottom = newx;
    }

    function setSliderFill(elem, val) {
      const height = `${val}%`
      elem.style.height = height;
    }  
  }

  render() {
    const {
      classes,
      data,
    } = this.props;
    return (
      <GridContainer>
        <GridItem xs={6} sm={6} md={6} className={classes.customMobilePadding}>
          <div id="calculator__sliderwrapper" className={`${classes.calculatorElement} ${classes.calculatorElementSlider}`}>
            <div className={classes.calculatorSliderWrapper}>
              <div id="calculator__sliderfill" className={classes.calculatorSliderFill}>
              </div>
              <input onChange={() => true} aria-label={data.calculator_labels.first_element_content} id="calculator__custom-range" className={classes.calculatorSliderRange} max="100" min="0" type="range" value="0"/>
              <div id="calculator__sliderthumb" className={classes.calculatorSliderThumb}>
                <div id="calculator__sliderthumb-label" className={classes.calculatorSliderLabel}>
                  <span>{data.calculator_labels.slider_label}</span>
                  <FontAwesomeIcon icon={faArrowRight} fixedWidth />
                </div>
                <FontAwesomeIcon icon={faChevronUp} fixedWidth />
                <FontAwesomeIcon icon={faChevronDown} fixedWidth />
              </div>
              <div id="calculator__slidervalue" className={classes.calculatorSliderValue}>1</div>
            </div>
            <span className={classes.calculatorUnit}>{data.calculator_labels.first_element_title}</span>
            <span id="calculator__value-custom-range" className={classes.calculatorValue}>1</span>
            <span className={classes.calculatorTitle}>{data.calculator_labels.first_element_content}</span>
          </div>
        </GridItem>
        <GridItem xs={6} sm={6} md={6} className={classes.customMobilePadding}>
          <div className={classes.calculatorElement}>
            <span className={classes.calculatorUnit}>{data.calculator_labels.second_element_title}</span>
            <span id="calculator__value-second-element" className={classes.calculatorValue}>183</span>
            <span className={classes.calculatorTitle}>{data.calculator_labels.second_element_content}</span>
          </div>
        </GridItem>
        <GridItem xs={6} sm={6} md={6} className={classes.customMobilePadding}>
          <div className={classes.calculatorElement}>
            <span className={classes.calculatorUnit}>{data.calculator_labels.third_element_title}</span>
            <span id="calculator__value-third-element" className={classes.calculatorValue}>1.2</span>
            <span className={classes.calculatorTitle}>{data.calculator_labels.third_element_content}</span>
          </div>
        </GridItem>
        <GridItem xs={6} sm={6} md={6} className={classes.customMobilePadding}>
          <div className={classes.calculatorElement}>
            <span className={classes.calculatorUnit}>{data.calculator_labels.fourth_element_title}</span>
            <span id="calculator__value-fourth-element" className={classes.calculatorValue}>45</span>
            <span className={classes.calculatorTitle}>{data.calculator_labels.fourth_element_content}</span>
          </div>
        </GridItem>
        <span className={classes.accentText}>{data.calculator_meta_text}</span>
      </GridContainer>
    )
  }
}

export default withStyles(MarineCalculator, marineCalculatorStyle);

