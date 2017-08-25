import Backdrop from "./backdrop";
import AnimateHOC from "../../animate-hoc";

export default AnimateHOC({ timeout: 500, animation: "fade" })(Backdrop);
