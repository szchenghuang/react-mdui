'use strict';

//#############################################################################
// Library includes.
//#############################################################################
import 'mdui/dist/css/mdui.min.css';
import 'mdui/dist/js/mdui.min.js';

//#############################################################################
// Application includes.
//#############################################################################
import Button from './Button';
import Chip, {
  Title as ChipTitle
} from './Chip';
import Icon from './Icon';
import Panel, {
  Item as PanelItem,
  ItemHeader as PanelItemHeader,
  ItemTitle as PanelItemTitle,
  ItemSummary as PanelItemSummary,
  ItemArrow as PanelItemArrow,
  ItemBody as PanelItemBody,
  ItemActions as PanelItemActions
} from './Panel';
import Slider from './Slider';


//#############################################################################
// Exports.
//#############################################################################
export default mdui;
export {
  Button,
  Chip,
  ChipTitle,
  Icon,
  Panel,
  PanelItem,
  PanelItemHeader,
  PanelItemTitle,
  PanelItemSummary,
  PanelItemArrow,
  PanelItemBody,
  PanelItemActions,
  Slider
};
