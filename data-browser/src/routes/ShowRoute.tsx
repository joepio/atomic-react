import * as React from 'react';
import { tryValidURL } from '@tomic/lib';
import ResourcePage from '../views/ResourcePage';
import { useCurrentSubject } from '../helpers/useCurrentSubject';
import { Search } from './SearchRoute';
import { About } from './AboutRoute';

/** Renders either the Welcome page, an Individual resource, or search results. */
const Show: React.FunctionComponent = () => {
  // Value shown in navbar, after Submitting
  const [subject] = useCurrentSubject();

  if (subject == undefined || subject == '') {
    return <About />;
  }
  try {
    tryValidURL(subject);
    return <ResourcePage key={subject} subject={subject} />;
  } catch (e) {
    return <Search query={subject} />;
  }
};

export default Show;
