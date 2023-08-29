/**
 *
 * Initializer
 *
 */

import { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

import useLocales from '../../hooks/useLocales';
import pluginId from '../../pluginId';

const Initializer = ({ setPlugin }) => {
  const { isLoading, locales, error } = useLocales();
  const ref = useRef();

  ref.current = setPlugin;

  useEffect(() => {
    if ((!isLoading && locales?.length > 0) || error) {
      ref.current(pluginId);
    }
  }, [isLoading, locales, error]);

  return null;
};

Initializer.propTypes = {
  setPlugin: PropTypes.func.isRequired,
};

export default Initializer;
