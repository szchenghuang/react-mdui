'use strict';

//#############################################################################
// Stylesheets.
//#############################################################################
import Styles from './styles';

//#############################################################################
// Library includes.
//#############################################################################
import React from 'react';
import { css } from 'glamor';
import { Chip, Icon } from '../';

//#############################################################################
// Application includes.
//#############################################################################

//#############################################################################
// Constants.
//#############################################################################
const examples = [
  {
    label: "Basic",
    demo: <Chip title="Click Me">Chip</Chip>
  },
  {

    label: "Text icon",
    demo: (
      <Chip
        icon="A"
        title="Chip"
      >
        Chip
      </Chip>
    )
  },
  {
    label: "Image icon",
    demo: (
      <Chip
        iconSrc="img/avatar1.jpg"
        title="Chip"
      >
        Chip
      </Chip>
    )
  },
  {
    label: "Material icon",
    demo: (
      <Chip
        icon={ <Icon materialIcon="&#xe87c;" /> }
        title="Chip"
      >
        Chip
      </Chip>
    )
  },
  {
    label: "Colored material icon",
    demo: (
      <Chip
        icon={ <Icon materialIcon="&#xe87c;" /> }
        classNameIcon="mdui-color-blue"
        title="Chip"
      >
        Chip
      </Chip>
    )
  },
  {
    label: "Close button",
    demo: (
      <Chip
        icon={ <Icon materialIcon="&#xe87c;" /> }
        title="Chip"
        delete
        onClickDelete={ function() { console.log( 'delete' ) } }
      >
        Chip
      </Chip>
    )
  }
];

export default examples;
