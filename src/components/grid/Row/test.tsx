import { render } from 'utils/test'

import Row from './index'

describe('<Row />', () => {
  it('should render Row', () => {
    const { container } = render(<Row>I am a Row</Row>)

    expect(container).toMatchSnapshot()
  })
})
