import ApiClient from '../utils/apiClient';

describe('ApiClient', () => {
  test('fetchDataList returns data', async () => {
    const startDate = '2022-01-01';
    const endDate = '2022-01-10';

    const data = await ApiClient.fetchDataList(startDate, endDate);

    // Add assertions to check if the data is as expected
    expect(data).toBeDefined();
    // Add more assertions as needed
  });

  test('fetchDataListDetailById returns data', async () => {
    const asteroidId = '123';

    const data = await ApiClient.fetchDataListDetailById(asteroidId);

    // Add assertions to check if the data is as expected
    expect(data).toBeDefined();
    // Add more assertions as needed
  });
});