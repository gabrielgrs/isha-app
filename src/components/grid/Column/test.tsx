import { render, screen } from 'utils/test'

import Column from './index'

describe('<Column />', () => {
  it('should render Column', () => {
    const { container } = render(<Column size={12}>I am a Column</Column>)

    expect(screen.queryByText('I am a Column')).toHaveStyle({ gridColumn: 'span 12' })
    expect(container).toMatchSnapshot()
  })
})
