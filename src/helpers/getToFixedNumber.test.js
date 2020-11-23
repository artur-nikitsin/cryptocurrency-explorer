import getToFixedNumber from './getToFixedNumber';

describe('The function returns the abbreviated fractional part with % symbol', () => {
  test('14.1% should be returned', () => {
    const input = 14.118756273410677;

    const actual = getToFixedNumber(input, 1);

    const expected = '14.1%';

    expect(actual).toBe(expected);
  });
  test('? should be returned', () => {
    const input = '';

    const actual = getToFixedNumber(input, 1);

    const expected = '?';

    expect(actual).toBe(expected);
  });
});
