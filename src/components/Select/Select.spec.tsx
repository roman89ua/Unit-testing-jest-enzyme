import React from 'react';
import { Select } from './Select';
import { shallow } from 'enzyme';
import { ISelect } from './types';

describe('Select component', () => {
  const props: ISelect = {
    defaultValue: 0,
    handleChange: () => {},
    options: [
      {
        label: 'All',
        value: 0,
      },
      {
        label: 'One',
        value: 1,
      },
      {
        label: 'Two',
        value: 2,
      },
      {
        label: 'Three',
        value: 3,
      },
      {
        label: 'Four',
        value: 4,
      },
    ],
  };
  const setUp = (props: ISelect) => shallow(<Select {...props} />);
  describe('Has props', () => {
    const component = setUp(props);

    it('should render select element', () => {
      const select = component.find('select');
      expect(select).toHaveLength(1);
    });

    it(`should render ${
      Array.isArray(props.options) && props.options.length > 0 ? props.options.length : 0
    } options`, () => {
      const options = component.find('option');
      expect(options).toHaveLength(Array.isArray(props.options) && props.options.length > 0 ? props.options.length : 0);
    });
  });

  describe('Has no props', () => {
    const emptyProps: ISelect = {
      defaultValue: undefined,
      handleChange: () => {},
      options: null,
    };

    it('should render placeholder', () => {
      const component = shallow(<Select {...emptyProps} />);
      const placeholder = component.find('.select__placeholder');
      expect(placeholder).toHaveLength(1);
    });
  });
});
