import { proxy } from "valtio"

const state = proxy({
    intro: true,
    color: "#EFDB48",
    isLogoTexture: true,
    isFullTexture: false,
    initial
});

export default state;