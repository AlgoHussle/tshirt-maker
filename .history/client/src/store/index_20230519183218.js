import { proxy } from "valtio"

const state = proxy({
    intro: true,
    color: "#EFDB48"
    
});

export default state;