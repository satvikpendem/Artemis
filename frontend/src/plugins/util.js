export default {
  install(Vue) {
    Vue.prototype.$util = {};
    Vue.prototype.$util.themeToDarkBoolean = (themeVal) => themeVal == "dark" ? true : false;
    Vue.prototype.$util.darkBooleanToTheme = (darkBooleanVal) => darkBooleanVal == true ? "dark" : "light";
  }
}