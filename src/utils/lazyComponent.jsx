

import  { Suspense } from 'react';

export default function LazyComponent(Component) {
  return function LazyComponentWithLoading(props) {
    return (
      <Suspense fallback="Page is loading">
        <Component {...props} />
      </Suspense>
    );
  };
}