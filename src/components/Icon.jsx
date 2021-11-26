import React from 'react';
import { string } from 'prop-types';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as faEnvelopeRegular } from '@fortawesome/free-regular-svg-icons';
import {
  faBars,
  faChevronUp,
  faEnvelope,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faBars,
  faChevronUp,
  faEnvelope,
  faEnvelopeRegular,
  faTimes,
);

const Icon = ({ icon, collection, className }) => {
  const faIcon = collection ? [collection, icon] : icon;
  return <FontAwesomeIcon icon={faIcon} className={className} />;
};

Icon.propTypes = {
  icon: string.isRequired,
  className: string.isRequired,
  collection: string,
};

Icon.defaultProps = {
  collection: '',
};

export default Icon;