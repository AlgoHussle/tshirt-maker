import { proxy } from "valtio"

const state = proxy({
    intro: true,
    color: "#EFDB48",
    isLogoTexture: true,
    
});

export default state;