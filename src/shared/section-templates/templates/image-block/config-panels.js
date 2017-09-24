import AnimationConfigPanel from "../../../widgets/configurations/animation-config-panel";
import LinkConfigPanel from "../../../widgets/configurations/link-config-panel";
import SizingConfigPanel from "../../../widgets/configurations/sizing-config-panel";
import FilterConfigPanel from "../../../widgets/configurations/filter-config-panel";
import SelectImageConfigPanel from "../../../widgets/configurations/select-image-config-panel";

export default function createConfigPanels(id, options) {
  return [
    {
      index: 0,
      title: "UPLOAD",
      icon: "image",
      panel: SelectImageConfigPanel(id, options.name)
    },
    {
      index: 1,
      title: "SIZING",
      icon: "size",
      panel: SizingConfigPanel(id, options.name)
    },
    {
      index: 2,
      title: "FILTER",
      icon: "filter",
      panel: FilterConfigPanel(id, options.name)
    },
    {
      index: 3,
      title: "ANIMATION",
      icon: "animation",
      panel: AnimationConfigPanel(id, options.name)
    },
    {
      index: 4,
      title: "LINK TO",
      icon: "link-to",
      panel: LinkConfigPanel(id, options.name)
    }
  ];
}
