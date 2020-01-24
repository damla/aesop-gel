import transitions from './css/transitions.module.css';

const fade = {
  classNames: {
    enter: transitions.fadeEnter,
    enterActive: transitions.fadeEnterActive,
    exit: transitions.fadeExit,
    exitActive: transitions.fadeExitActive,
  },
  timeout: 500,
};

const slowFade = {
  classNames: {
    enter: transitions.slowFadeEnter,
    enterActive: transitions.slowFadeActive,
    exit: transitions.slowFadeExit,
    exitActive: transitions.slowFadeExitActive,
  },
  timeout: 1500,
};

const shiftInLeft = {
  classNames: {
    enter: transitions.shiftInLeftEnter,
    enterActive: transitions.shiftInLeftActive,
    exit: transitions.shiftInLeftExit,
    exitActive: transitions.shiftInLeftExitActive,
  },
  timeout: 1500,
};

const shiftInDown = {
  classNames: {
    enter: transitions.shiftInDownEnter,
    enterActive: transitions.shiftInDownActive,
    exit: transitions.shiftInDownExit,
    exitActive: transitions.shiftInDownExitActive,
  },
  timeout: 1500,
};

const slideDown = {
  classNames: {
    enter: transitions.slideDownEnter,
    enterActive: transitions.slideDownEnterActive,
    exit: transitions.slideDownExit,
    exitActive: transitions.slideDownExitActive,
  },
  timeout: 500,
};

const slideRight = {
  classNames: {
    enter: transitions.slideRightEnter,
    enterActive: transitions.slideRightEnterActive,
    exit: transitions.slideRightExit,
    exitActive: transitions.slideRightExitActive,
  },
  timeout: 500,
};

const zoom = {
  classNames: {
    enter: transitions.zoomEnter,
    enterActive: transitions.zoomEnterActive,
    exit: transitions.zoomExit,
    exitActive: transitions.zoomExitActive,
  },
  timeout: 500,
};

export default {
  fade,
  shiftInDown,
  shiftInLeft,
  slideDown,
  slideRight,
  slowFade,
  zoom,
};
