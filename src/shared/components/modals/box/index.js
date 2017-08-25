import Box from "./box";
import AnimateHOC from "../../animate-hoc";

export default AnimateHOC({ timeout: 500, animation: "fly" })(Box);
