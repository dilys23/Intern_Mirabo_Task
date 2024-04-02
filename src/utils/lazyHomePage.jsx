
import React, { Suspense } from 'react';

const LazyComponent2 = React.lazy(() => import("../pages/Home/HomePage"));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent2/> 
    </Suspense>
  );
}

export default App;
