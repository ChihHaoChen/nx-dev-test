import { render } from '@testing-library/react';

import StoreFeatureCardDetail from './store-feature-card-detail';

describe('StoreFeatureCardDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StoreFeatureCardDetail />);
    expect(baseElement).toBeTruthy();
  });
});
