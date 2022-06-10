import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('TEST APP', () => {
  const renderBlock = <MemoryRouter><Provider store={store}><App /></Provider></MemoryRouter>;

  test('Router test', async () => {
    render(renderBlock);
    const logo = await screen.findByTestId('logo');
    expect(logo).toHaveTextContent('BCSwallet');

    const converterLink = screen.getByTestId('converter-link');
    userEvent.click(converterLink);
    expect(screen.getByTestId('logo')).toHaveTextContent('BCSConverter');

  });
});