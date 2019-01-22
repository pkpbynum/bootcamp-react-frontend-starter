import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Roboto:400,700", "Open Sans:400"]
  }
});

const theme = {
  colors: {
    purpleNavy: "#4E598C",
    white: "#FFFFFF",
    topaz: "#F9C784",
    rajah: "#FCAF58",
    mangoTango: "#FF8C42"
  },
  fonts: {
    openSans: {
      family: "Open Sans"
    },
    roboto: {
      family: "Roboto"
    }
  }
};

export default theme;
