import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GoogleMap from './GoogleMap';

configure({ adapter: new Adapter() });

describe('<GoogleMap />', () => {
  it('should be defined', () => {
    expect(GoogleMap).toBeDefined();
  });
});
