import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StoreDetail from './StoreDetail';

configure({ adapter: new Adapter() });

describe('<StoreDetail />', () => {
  it('should be defined', () => {
    expect(StoreDetail).toBeDefined();
  });
});
