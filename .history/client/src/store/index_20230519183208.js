import { proxy } from "valtio"

const state = proxy({
    intro: true,
    color: "#EFDB"
});

export default state;